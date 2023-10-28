import "../services/api-client";
// import UseData, { FetchResponse } from "./UseData";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
// import { Platform } from "./UseGames";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatForms = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default usePlatForms;
