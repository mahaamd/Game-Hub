import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import UseGenres from "../hooks/UseGenres";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}

const GameHeadings = ({ gameQuery }: Props) => {
  const { data } = UseGenres();
  const { data: platforms } = usePlatforms();

  const genre = data?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `
    ${platform?.name || ""} ${genre?.name || ""} Game
  `;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeadings;
