import { Text, Image, HStack } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const navbar = ({ onSearch }: Props) => {
  return (
    <HStack marginTop={3} justifyContent={"space-between"}>
      <Image marginLeft={3} src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default navbar;
