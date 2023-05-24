
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
        with_genres: MovieQuery.genre ?.id,
        // resultsCategory: MovieQuery.category?.id ,
        sort_by: MovieQuery.sortOrder||MovieQuery.category?.id,
        query: MovieQuery.searchText
      },
      
    },
    [MovieQuery]
    
  );
export default useMovies;
