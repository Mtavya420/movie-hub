import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useCategory, { Categori } from "../hooks/useCategory";

interface Props {
  onSelectedCategori: (categori: Categori) => void;
  selectedCategori: Categori | null;
}

const GenreList = ({ selectedCategori, onSelectedCategori }: Props) => {
  const { data, error, isLoading } = useCategory();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Category
      </Heading>
      <List>
        {data.map((categori) => (
          <ListItem key={categori.id} paddingY="5px">
            <HStack>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  categori.id === selectedCategori?.id ? "bold" : "normal"
                }
                onClick={() => onSelectedCategori(categori)}
                fontSize="lg"
                variant="link"
              >
                {categori.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
