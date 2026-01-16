import type { Game } from "@/hooks/useGames";
import { Box, Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Box height="200px">
        <Image
          src={game.background_image}
          alt={game.name}
          height="100%"
          width="100%"
          objectFit="cover"
          loading="lazy"
        />
      </Box>
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
