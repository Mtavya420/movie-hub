
import useTrailers from "../hooks/useTrailers";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  movieId: number;
}

const MovieTrailer = ({ movieId }: Props) => {
  const { data, error, isLoading } = useTrailers(movieId);

  if (isLoading) return null;
  if (error) throw error;

  const officialTrailer = data?.results?.find(
    (trailer) => trailer.type === "Trailer" && trailer.official
  );

  if (!officialTrailer) return null;

  return (
    <Box>
      <Box key={officialTrailer.id}>
        <Heading>{officialTrailer.name}</Heading>
        <Box
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio (divide height by width and multiply by 100%)
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${officialTrailer.key}`}
            title={officialTrailer.name}
            frameBorder={0}
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieTrailer;
