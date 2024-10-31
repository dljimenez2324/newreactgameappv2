import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

// REFACTORED
// undefined is absense of value   but null is an intentinal absense of value
//// we will move the GameQuery to store.ts
// export interface GameQuery {
//   genreId?: number;  // notice that adding ? means its allowed to be undefined
//   platformId: number;
//   sortOrder: string;
//   searchText: string;
// }

const App = () => {
  //  REFACTORED
  // const [selectedGenre, setSelectedGenre] = useState<Genre |null>(null)

  // // remember we put our state where the parent component is so app is the parent for this useState below
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  //// for global statemanagement we dont need useState anymore
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      {/* create our responsive layout with Charkha UI Grid */}
      {/* Nav, aside, main ______ responsive for desktop and mobile */}
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //992
        }}
      >
        <GridItem area="nav" bg="">
          {/* <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}/> */}
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding={1.5}>
            {" "}
            {/* <GenreList selectedGenreId={gameQuery.genreId} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/> */}
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box padding={5}>
            <GameHeading />
            <HStack spacing={5} marginY={5}>
              <PlatformSelector />
              <SortSelector/>
            </HStack>
          </Box>
          {/* refactored below */}
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
