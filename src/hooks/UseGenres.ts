import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import UseData, { FetchResponse } from "./UseData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const getData = () =>
  apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: getData,
    staleTime: 24 * 24 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default UseGenres;
