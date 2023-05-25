import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";



const apiClient = new APIClient<Movie>("/discover/movie");
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  release_date: string;
}

const useMovies = (MovieQuery: MovieQuery) =>
  useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", MovieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: MovieQuery.genre?.id,
          // resultsCategory: MovieQuery.category?.id ,
          sort_by: MovieQuery.sortOrder || MovieQuery.category?.id,
          query: MovieQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  }); 
export default useMovies;
