import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";


interface Props {
  onSelectCategory: (category: string) => void;
}
const CategoryList = ({ onSelectCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("Category");

  const categories = ["Now Playing", "Popular", "Top Rated", "Upcoming"];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCategory}
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem
            key={category}
            onClick={() => handleCategoryChange(category)}
            fontWeight={selectedCategory === category ? "bold" : "normal"}
          >
            {category}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryList;
