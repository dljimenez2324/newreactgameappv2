//imports
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
// import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";

///// use global state management
// interface Props {
//     onSelectedGenre: (genre:Genre) => void;
//     selectedGenreId?: number;
// }

const GenreList = () => {
  //usestates
  // const {data} = useGenres<Genre>('/genres');

  const { data, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      <List paddingBottom={5}>
        {isLoading && <Spinner />}

        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginBottom={3}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={16}
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                color={genre.id === selectedGenreId ? "blue.500" : "normal"}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
