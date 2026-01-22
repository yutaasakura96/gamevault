import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '@/store';

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          {selectedPlatform?.name || 'Platforms'}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => setSelectedPlatformId(platform.id)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
