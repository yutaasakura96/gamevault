import apiClient from '@/services/api-client';
import { type FetchResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

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
    queryFn: () => apiClient.get<FetchResponse<PlatformParent>>('/platforms/lists/parents')
      .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
}

export default usePlatforms;
