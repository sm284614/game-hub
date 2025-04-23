import { useColorMode } from "@/components/ui/color-mode";
import { HStack, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        colorScheme="red"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>{colorMode} mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
