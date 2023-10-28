import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
// import PlatForms from '../hooks/usePlatforms'
import usePlatForms, { Platform } from "../hooks/usePlatforms";
// import { Platform } from "../hooks/UseGames";

interface Props {
  selectedPlatform: (Platform: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  selectedPlatformId: platformId,
  selectedPlatform,
}: Props) => {
  const { data, isLoading, error } = usePlatForms();
  const foundPlatform = data?.results.find(
    (platform) => platform.id === platformId
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {foundPlatform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id.toString()}
            onClick={() => {
              selectedPlatform(item.id);
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
