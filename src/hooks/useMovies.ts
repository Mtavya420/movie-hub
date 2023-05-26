import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store";

const apiClient = new APIClient<Movie>("/discover/movie");
export interface Movie {
  id: number;
  title: string;
  // movie_id: number;
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  release_date: string;
}

const useMovies = () =>{
  const MovieQuery = useMovieQueryStore(s=>s.movieQuery)

 return useInfiniteQuery<FetchResponse<Movie>, Error>({
   queryKey: ["movies", MovieQuery],
   queryFn: ({ pageParam = 1 }) =>
     apiClient.getAll({
       params: {
         with_genres: MovieQuery.genreId,
         // resultsCategory: MovieQuery.category?.id ,
         sort_by: MovieQuery.sortOrder,
         with_keywords: MovieQuery.searchText,
         page: pageParam,
       },
     }),
   getNextPageParam: (lastPage) => {
     return lastPage.page < lastPage.total_pages
       ? lastPage.page + 1
       : undefined;
   },
   staleTime: ms("24h"),
 });
}
 
export default useMovies;
