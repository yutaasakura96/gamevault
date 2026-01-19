import apiClient from '@/services/api-client';
import { type FetchResponse } from './useData';
import type { PlatformParent } from '@/entities/platform';
import { useQuery } from '@tanstack/react-query';

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<PlatformParent>>('/platforms/lists/parents')
      .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
}

export default usePlatforms;
