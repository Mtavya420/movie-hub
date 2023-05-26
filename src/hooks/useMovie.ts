import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";

const apiClient = new APIClient<Movie>("/movie");
const useMovie = (movie_id: number | string) =>
  useQuery({
    queryKey: ["movies", movie_id],
    queryFn: () => apiClient.get(movie_id),
  });

export default useMovie;
