import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../entities/Movie";
import Rating from "./Rating";
import Emoji from "./Emoji";
import noImage from "../assets/no-image.webp";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

  return (
    <Card>
      {movie.backdrop_path ? (
        <Image src={backdropUrl} alt={movie.title} />
      ) : (
        <Image src={noImage} alt="No Image" />
      )}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Heading fontSize="md" as="i">
            {movie.release_date}
          </Heading>
          <Rating score={movie.vote_average} />
        </HStack>
        <Heading fontSize="2xl" justifyContent="end">
          <Link to={"/movies/" + movie.id}>{movie.title}</Link>
          <Emoji rating={movie.vote_average} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
