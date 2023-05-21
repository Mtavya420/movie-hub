import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MusicCardContainer from "./MovieCardContainer";

import { MovieQuery } from "../App";

interface Props{
  movieQuery: MovieQuery;

}
const MovieGrid = ({movieQuery}: Props) => {
  const { data, isLoading, error } = useMovies(movieQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

if (error) return <Text>{error}</Text>;
  return (
    
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <MusicCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MusicCardContainer>
          ))}
        {data.map((movie) => (
          <MusicCardContainer key={movie.id}>
            <MovieCard movie={movie} />
          </MusicCardContainer>
        ))}
      </SimpleGrid>
 
  );
};

export default MovieGrid;
