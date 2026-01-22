import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "@/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) setSearchText(ref.current.value);
    }}>
      <InputGroup startElement={<BsSearch />}>
        <Input ref={ref} borderRadius="20px" placeholder="Search games..." variant="subtle" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
