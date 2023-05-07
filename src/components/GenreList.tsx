import { Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>error</Text>}
      {isLoading && <Text>Genres is loading</Text>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
