import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store";
import { Movie } from "../entities/Movie";


const useMovies = () => {
  const MovieQuery = useMovieQueryStore((s) => s.movieQuery);
   const endpoint = MovieQuery.searchText ? "/search/movie" : "/discover/movie";
   const apiClient = new APIClient<Movie>(endpoint);

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", MovieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: MovieQuery.genreId,
          include_video: 'true',
          sort_by: MovieQuery.sortOrder||MovieQuery.category,
          query: MovieQuery.searchText,
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
};

export default useMovies;
