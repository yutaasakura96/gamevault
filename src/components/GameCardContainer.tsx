import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius="10px" overflow="hidden" _hover={{ transform: 'scale(1.03)', transition: 'transform .15s ease-in-out' }} cursor="pointer">
      {children}
    </Box>
  );
};

export default GameCardContainer;
