import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="280px" maxW="sm" overflow="hidden" borderRadius="10px">
      <Box height="200px">
        <Skeleton height="100%" width="100%" />
      </Box>
      <Card.Body gap="2">
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
