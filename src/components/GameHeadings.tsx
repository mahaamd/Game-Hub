import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeadings = ({ gameQuery }: Props) => {
  const heading = `
    ${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Game
  `;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeadings;
