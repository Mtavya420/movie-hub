import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

import {  Trailer } from "../entities/Trailer";


const useTrailers = (movieId: number) =>{
  const apiClient = new APIClient<Trailer>(`/movie/${movieId}/videos`);
  return useQuery({
    queryKey: ["videos", movieId],
    queryFn: () =>
      apiClient.getAll({ params: { movie_id: movieId, videos: true } }),
  });
}

export default useTrailers;


