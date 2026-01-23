import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/" >
        <Image src={logo} boxSize="60px" cursor="pointer" objectFit="cover" />
      </Link>
      <Text fontSize="2xl" fontWeight="bold">GameVault</Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
