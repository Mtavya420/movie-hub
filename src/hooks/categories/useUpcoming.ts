import useData from "../useData";
import { Category } from "./useNowPlaying";

const useUpcoming = () => useData<Category>("/movie/upcoming");

export default useUpcoming;
