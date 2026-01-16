import type { Game } from "@/hooks/useGames";
import { Box, Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius="10px">
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
        <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
