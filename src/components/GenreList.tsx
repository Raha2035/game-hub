import { Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>error</Text>}
      {isLoading && <Text>Genres is loading</Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
