import type { GameQuery } from '@/App'
import useData from './useData';

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

  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery.genre?.id, platformIds, gameQuery.sortOrder, gameQuery.searchText]
  )
}

export default useGames;
