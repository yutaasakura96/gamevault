import { Badge } from "@chakra-ui/react";

interface Props {
  score: number | null | undefined;
}

const CriticScore = ({ score }: Props) => {
  if (score == null) {
    return null;
  }

  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
