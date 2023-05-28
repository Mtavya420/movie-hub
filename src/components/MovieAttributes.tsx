import { SimpleGrid, Text } from "@chakra-ui/react";
import { Movie } from "../entities/Movie";
import DefinitionItem from "./DefinitionItem";
import Rating from "./Rating";


interface Props {
  movie: Movie;
}
const MovieAttributes = ({ movie }: Props) => {
  return (
    <>
     
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem term={"score"}>
          <Rating score={movie.vote_average} />
        </DefinitionItem>
        <DefinitionItem term={"Genres"}>
          {movie.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term={"release date"}>
          {movie.release_date}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default MovieAttributes;
