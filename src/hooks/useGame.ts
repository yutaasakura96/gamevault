import type { Game } from "@/entities/Game";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
