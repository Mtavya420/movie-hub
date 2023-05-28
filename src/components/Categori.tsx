import {
  Button,
  Divider,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import useMovieQueryStore from "../store";

import useMovieCategory from "../hooks/useMovieCategory";

interface Props {
  value: string;
}

const Categori = ({ value }: Props) => {
  const category = useMovieQueryStore((s) => s.movieQuery.category);
  const setCategory = useMovieQueryStore((s) => s.setCategory);
  const { data, error, isLoading } = useMovieCategory(value);

  // const categories = [
  //   { value: "now_playing", label: "Now Playing" },
  //   { value: "popular", label: "Popular" },
  //   { value: "top_rated", label: "Top Rated" },
  //   { value: "upcoming", label: "Upcoming" },
  // ];
    const categories = [
      {
        value:
          "popularity.desc&with_release_type=2||3",
        label: "Now Playing",
      },
      { value: "popularity.desc", label: "Popular" },
      {
        value: "vote_average.desc",
        label: "Top Rated",
      },
      {
        value:
          "popularity.desc&with_release_type=2|3&release_date.gte={2023-06-03}&release_date.lte={2024-01-31}",
        label: "Upcoming",
      },
    ];


    

  if (error) return null;

  if (isLoading) return <Spinner />;



  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {categories.map((orderCategory) => (
          <ListItem
            paddingY="5px"
            key={orderCategory.value}
            value={orderCategory.value}
          >
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={orderCategory.value === category ? "bold" : "normal"}
              onClick={() => setCategory(orderCategory.value)}
              fontSize="lg"
              variant="link"
            >
              {orderCategory.label}
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default Categori;
