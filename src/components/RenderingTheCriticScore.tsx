import React from "react";
import { Game } from "../hooks/UseGames";
import { Badge, Text } from "@chakra-ui/react";
interface Props {
  score: number;
}

const RenderingTheCriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yello" : "";
  return (
    <Badge paddingX={2} colorScheme={color} fontSize={"14px"} margin={2}>
      {score}
    </Badge>
  );
};

export default RenderingTheCriticScore;
