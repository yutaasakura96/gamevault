import { Box, Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import { Link } from "react-router-dom";
import type { Game } from "@/entities/Game";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Box aspectRatio={3 / 2} overflow="hidden">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          height="100%"
          width="100%"
          objectFit="cover"
          loading="lazy"
        />
      </Box>
      <Card.Body gap="2">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize={"xl"}>
          <Link to={`/games/` + game.slug}>
            {game.name}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
