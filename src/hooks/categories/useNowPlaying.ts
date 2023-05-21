import useData from "../useData";


export interface Category {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
}
const useNowPlaying = () => useData<Category>("/movie/now_playing");

export default useNowPlaying;
