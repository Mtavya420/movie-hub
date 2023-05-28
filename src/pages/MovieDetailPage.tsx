import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MovieAttributes from "../components/MovieAttributes";
import useMovie from "../hooks/useMovie";
import MovieTrailer from "../components/MovieTrailer";
import MovieImage from "../components/MovieImage";

const MovieDetailPage = () => {
  const { movie_id } = useParams();
  const { data: movie, isLoading, error } = useMovie(movie_id!);

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <GridItem>
          <MovieImage movie={movie} />
        </GridItem>
        <GridItem>
          <Heading>{movie.title}</Heading>
          <Text as="samp">{movie.overview}</Text>
          <MovieAttributes movie={movie} />
        </GridItem>
      </SimpleGrid>
      <MovieTrailer movieId={movie.id} />
    </>
  );
};

export default MovieDetailPage;
