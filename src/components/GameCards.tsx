import { Text, Image, Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/UseGames";
import PlatformIconList from "./PlatformIconList";
import RenderingTheCriticScore from "./RenderingTheCriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

const GameCarsds = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
          <RenderingTheCriticScore
            score={game.metacritic}
          ></RenderingTheCriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCarsds;
