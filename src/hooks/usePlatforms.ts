import "../services/api-client";
// import UseData, { FetchResponse } from "./UseData";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
// import { Platform } from "./UseGames";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const PlatForms = () => {
  const fetchData = () => {
    return apiClient
      .get<Platform>("/platforms/lists/parents")
      .then((res) => res.data);
  };

  return useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default PlatForms;
