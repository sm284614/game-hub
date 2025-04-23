import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          <BsChevronDown />
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                as="button"
                onPointerDown={() => onSelectPlatform(platform)}
                value={platform.id.toString()}
                key={platform.id}
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
