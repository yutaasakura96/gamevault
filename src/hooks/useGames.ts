import type { GameQuery } from '@/App'
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/services/api-client';
import type { FetchResponse } from '@/services/api-client';

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const platformIds = gameQuery.platform?.platforms.map((p) => p.id).join(',');

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })
      .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGames;
