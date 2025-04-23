import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    switch: SiNintendoswitch,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
