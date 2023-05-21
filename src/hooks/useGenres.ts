import genres from "../data/genres";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// const useGenres = () => useData<Genre>("/genre/movie/list");

const useGenres = () => ({ data: genres, isLoading: false, error: null });


export default useGenres;
