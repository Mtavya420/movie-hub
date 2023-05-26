import genres from "../data/genres";

// const useGenres = () => useData<Genre>("/genre/movie/list");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
