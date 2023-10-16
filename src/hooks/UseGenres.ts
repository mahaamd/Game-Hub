import UseData from "./UseData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => ({ datas: genres, isloading: false, error: null });

export default UseGenres;
