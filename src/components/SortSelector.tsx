import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (sortorder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ sortOrder, onSelectedOrder }: Props) => {
  const sortselector = [
    { value: "", label: "Relevent" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {sortselector.find((item) => sortOrder === item.value)?.label ||
          "Relevence"}
      </MenuButton>
      <MenuList>
        {sortselector.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
