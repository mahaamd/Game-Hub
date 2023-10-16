import UseData from "./UseData";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const UseGames = (GameQuery: GameQuery) =>
  UseData<Game>(
    "/games",
    {
      params: {
        genres: GameQuery.genre?.id,
        platforms: GameQuery.platform?.id,
        ordering: GameQuery.sortOrder,
        search: GameQuery.searchText,
      },
    },
    [GameQuery]
  );
export default UseGames;
