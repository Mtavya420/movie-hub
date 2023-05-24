import category from "../data/category";


export interface Category {
  id: number;
  name: string;
  images: string;
  //   title: string;
  //   poster_path: string;
  //   overview: string;
  //   vote_average: number;
  //   backdrop_path: string;
}

// const useGenres = () => useData<Genre>("/genre/movie/list");

const useCategory = () => ({ data: category, isLoading: false, error: null });

export default useCategory;
