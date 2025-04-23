import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize={13}
      fontWeight={700}
      borderRadius={3}
      paddingX={3}
      paddingY={1}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
