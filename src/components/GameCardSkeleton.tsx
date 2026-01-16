import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
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
