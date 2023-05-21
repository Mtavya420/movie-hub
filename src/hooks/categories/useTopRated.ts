import useData from "../useData";
import { Category } from "./useNowPlaying";


const useTopRated = () => useData<Category>("/movie/top_rated");

export default useTopRated;
