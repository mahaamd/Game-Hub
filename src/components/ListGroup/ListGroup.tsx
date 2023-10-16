import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding: 0px;
`;
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  background-color: red;
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;
// import { MouseEvent } from "react";
// let selectedIndex = 0;
interface Props {
  items: string[];
  onSelecteItem: (item: string) => void;
  headings: string;
}
function ListGroup({ items, headings, onSelecteItem }: Props) {
  // let items = ["new york", "hong kong", "san fransisko", "tokyo", "london"];
  const [selectedIndex, setSelectedIdex] = useState(-1);
  return (
    <>
      <h1>{headings}</h1>
      {items.length === 0 && <p>no item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIdex(index);
              onSelecteItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
