import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie';
import { Heading, Spinner, Text } from '@chakra-ui/react';

const MovieDetailPage = () => {
  const {movie_id} = useParams();
  const {data:movie, isLoading, error } = useMovie(movie_id!);

  if(isLoading) return <Spinner/>
  if (error|| !movie) throw error;

  return (
    <>
    <Heading>
      {movie.title}
    </Heading>
    <Text>{movie.overview}</Text>
    </>
  )
}

export default MovieDetailPage