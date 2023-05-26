import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useCategory from "../hooks/useCategory";
import useMovieQueryStore from "../store";



const Categori = () => {
   const categoryId = useMovieQueryStore((s) => s.movieQuery.categoryId);
  //  const setCategoryId = useMovieQueryStore((s) => s.setCategoryId);
  const { data, error, isLoading } = useCategory();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Category
      </Heading>
      <List>
        {data.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={category.images}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  category.id === categoryId ? "bold" : "normal"
                }
                // onClick={() => setCategoryId(categoryId)}
                fontSize="lg"
                variant="link"
              >
                {category.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Categori;
