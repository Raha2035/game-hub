import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      paddingX={2}
      borderRadius="4px"
      fontSize="14px"
      variant="outline"
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : ""}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
