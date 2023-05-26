import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Categori from "./components/Categori";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import MovieHeading from "./components/MovieHeading";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

function App() {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Box marginBottom={5} paddingY={5}>
            <Categori />
          </Box>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <MovieHeading />
          <Flex paddingLeft={2} marginBottom={5}>
            <SortSelector />
          </Flex>
          <MovieGrid  />

          <Flex marginBottom={5}>
            <Box marginRight={5}></Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
