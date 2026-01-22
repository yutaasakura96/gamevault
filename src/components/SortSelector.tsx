import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "@/store";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          Order By: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => setSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
