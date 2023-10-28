import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
// import UseData, { FetchResponse } from "./UseData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");

const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 24 * 60 * 1000,
    // initialData: { count: genres.length, results: genres },
  });

export default UseGenres;
