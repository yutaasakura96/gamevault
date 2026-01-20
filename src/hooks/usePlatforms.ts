import platforms from '@/data/platforms';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms?: Platform[];
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
}

export default usePlatforms;
