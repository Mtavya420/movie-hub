import { SimpleGrid, Text } from "@chakra-ui/react";
import useMusic from "../hooks/useMusic";
import MusicCard from "./MusicCard";
import MusicCardContainer from "./MovieCardContainer";
import MusicCardSkeleton from "./MovieCardSkeleton";

const MusicGrid = () => {
  const { music, error, isLoading } = useMusic();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <MusicCardContainer key={skeleton}>
              <MusicCardSkeleton />
            </MusicCardContainer>
          ))}
        {music.map((song) => (
          <MusicCardContainer>
            <MusicCard key={song.id} song={song} />
          </MusicCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MusicGrid;
