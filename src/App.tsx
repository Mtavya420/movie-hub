import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Categori from "./components/Categori";
import SortSelector from "./components/SortSelector";
import MovieHeading from "./components/MovieHeading";
import { Category } from "./hooks/useCategory";

export interface MovieQuery {
  genre: Genre | null;
  category: Category | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setMovieQuery({ ...movieQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Box marginBottom={5} paddingY={5}>
            <Categori
              selectedCategori={movieQuery.category}
              onSelectedCategori={(genre) =>
                setMovieQuery({ ...movieQuery, genre })
              }
            />
          </Box>
          <GenreList
            selectedGenre={movieQuery.genre}
            onSelectedGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <MovieHeading movieQuery={movieQuery} />
          <Flex paddingLeft={2} marginBottom={5}>
            <SortSelector
              sortOrder={movieQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setMovieQuery({ ...movieQuery, sortOrder })
              }
            />
          </Flex>
          <MovieGrid movieQuery={movieQuery} />

          <Flex marginBottom={5}>
            <Box marginRight={5}></Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
