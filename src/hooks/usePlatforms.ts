import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<PlatformParent>('/platforms/lists/parents');
export interface PlatformChild {
  id: number
  name: string
  slug: string
}

export interface PlatformParent {
  id: number
  name: string
  slug: string
  platforms: PlatformChild[]
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
}

export default usePlatforms;
