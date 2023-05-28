import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

import { ImageProp } from "../entities/Image";

const useTrailers = (movieId: number) => {
  const apiClient = new APIClient<ImageProp>(`/movie/${movieId}/images`);
  return useQuery({
    queryKey: ["images", movieId],
    queryFn: () =>
      apiClient.getAll({ params: { movie_id: movieId} }),
  });
};

export default useTrailers;
