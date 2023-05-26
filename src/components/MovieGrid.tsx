import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MusicCardContainer from "./MovieCardContainer";


import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const MovieGrid = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          paddingRight={3}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <MusicCardContainer key={skeleton}>
                <MovieCardSkeleton />
              </MusicCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <MusicCardContainer key={movie.id}>
                  <MovieCard movie={movie} />
                </MusicCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
