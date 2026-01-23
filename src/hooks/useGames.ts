import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/api-client';
import ms from 'ms';
import useGameQueryStore from '@/store';
import type Game from '@/entities/Game';


const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  const parentPlatformIds = gameQuery.platformId ? gameQuery.platformId.toString() : undefined;

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: parentPlatformIds,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms('24h'),
  });
};

export default useGames;
