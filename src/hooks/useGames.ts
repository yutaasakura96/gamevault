import type { GameQuery } from '@/App'
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/api-client';
import type { PlatformChild } from './usePlatforms';


const apiClient = new APIClient<Game>('/games');
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformChild }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const platformIds = gameQuery.platform?.platforms.map((p: PlatformChild) => p.id).join(',');

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGames;
