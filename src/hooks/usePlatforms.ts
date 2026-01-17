import useData from './useData';
import type { PlatformParent } from '@/entities/platform';

const usePlatforms = () => useData<PlatformParent>('/platforms/lists/parents');
export default usePlatforms;
