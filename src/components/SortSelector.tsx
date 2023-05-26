import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../store";

const SortSelector = () => {
  const sortOrder = useMovieQueryStore((s) => s.movieQuery.sortOrder);
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "release_date.lte", label: "Release date" },
    { value: "vote_count.desc", label: "Vote Count" },
    { value: "vote_average.desc", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
