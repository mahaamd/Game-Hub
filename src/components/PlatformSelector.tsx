import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
// import PlatForms from '../hooks/usePlatforms'
import PlatForms from "../hooks/usePlatforms";
import { Platform } from "../hooks/UseGames";

interface Props {
  selectedPlatform: (Platform: Platform) => void;
  platform: Platform | null;
}

const PlatformSelector = ({ platform, selectedPlatform }: Props) => {
  const { datas, error } = PlatForms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {platform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {datas.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id.toString()}
            onClick={() => {
              selectedPlatform(item);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
