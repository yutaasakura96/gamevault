import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link onClick={() => onSelectGenre(genre)} fontSize="lg">
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
