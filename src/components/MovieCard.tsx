import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import Rating from "./Rating";
import Emoji from "./Emoji";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={backdropUrl} alt={movie.title} />
      <CardBody>
        <HStack justifyContent="end" marginBottom={3}>
          <Rating score={movie.vote_average} />
        </HStack>
        <Heading fontSize="2xl" justifyContent="end">
          {movie.title}
          <Emoji rating={movie.vote_average} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
