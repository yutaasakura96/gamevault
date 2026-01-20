import type { GameQuery } from '@/App'
import { useQuery } from '@tanstack/react-query';
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

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGames;
