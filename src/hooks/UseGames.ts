// import UseData, { FetchResponse } from "./UseData";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const UseGames = (GameQuery: GameQuery) => {
  const fetchData = () => {
    return apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          genres: GameQuery.genre?.id,
          parent_platforms: GameQuery.platform?.id,
          ordering: GameQuery.sortOrder,
          search: GameQuery.searchText,
        },
      })
      .then((res) => res.data);
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", GameQuery],
    queryFn: fetchData,
  });
};

export default UseGames;
