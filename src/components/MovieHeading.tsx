import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import useMovieQueryStore from "../store";



const GameHeading = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  // const categoryId = useMovieQueryStore((s) => s.movieQuery.category);


  const genre = useGenre(genreId);
  // const category = useMovieCategory(value);


  const heading = `${genre?.name || ""} Movies`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
