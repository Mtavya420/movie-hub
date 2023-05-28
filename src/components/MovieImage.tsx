import { Box, Card, Image } from "@chakra-ui/react";
import noImage from "../assets/no-image.webp";
import { Movie } from "../entities/Movie";

interface Props {
  movie: Movie;
}
const MovieImage = ({ movie }: Props) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="300px"
      display="flex"
      justifyContent="center"
    >
      <Card>
        {movie.poster_path ? (
          <Image src={backdropUrl} alt={movie.title} />
        ) : (
          <Image src={noImage} alt="No Image" />
        )}
      </Card>
    </Box>
  );
};

export default MovieImage;
