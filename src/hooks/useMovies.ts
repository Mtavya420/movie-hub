
import useData from "./useData";

import { MovieQuery } from '../App';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path: string
}

const useMovies = (
  MovieQuery: MovieQuery
) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: {
        genres: MovieQuery.genre ?.id,
        resultsCategory: MovieQuery.category?.id,
        results: MovieQuery.sortOrder,
        search: MovieQuery.searchText
      },
      
    },
    [MovieQuery]
    
  );
export default useMovies;
