import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGameQueryStore from "@/store";
import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((state) => state.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading as="h2" marginBottom={3} fontSize="2xl">Genres</Heading>
      <List.Root listStyleType="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} onClick={() => setSelectedGenreId(genre.id)} fontSize="lg">
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
