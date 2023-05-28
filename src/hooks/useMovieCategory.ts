import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";


interface EndpointMap {
  [key: string]: string;
}
const useMovieCategory = (value: string) => {
  const endpointMap:EndpointMap = {
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
  };


  const apiClient = new APIClient<Movie>(endpointMap[value]);
  return useQuery({
    queryKey: ["category", value],
    queryFn: apiClient.getAll,
  });
};
export default useMovieCategory;

