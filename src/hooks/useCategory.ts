import category from "../data/category";


export interface Categori {
  id: number;
  name: string;
}

// const useGenres = () => useData<Genre>("/genre/movie/list");

const useCategory = () => ({ data: category, isLoading: false, error: null });

export default useCategory;
