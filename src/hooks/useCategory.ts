import category from "../data/category";

// const useGenres = () => useData<Genre>("/genre/movie/list");

const useCategory = () => ({ data: category, isLoading: false, error: null });

export default useCategory;
