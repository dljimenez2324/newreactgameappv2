// this will be replacing our app.tsx

import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
// import { error } from "console";

const HomePage = () => {
    // throw new Error('error');
  return (
    
    <>
      <Grid
        templateAreas={{
          base: `'main'`,
          lg: `'aside main'`, //992
        }}
      >
        <Show above="lg">
          <GridItem area="aside" padding={1.5}>
            {" "}
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box padding={5}>
            <GameHeading />
            <HStack spacing={5} marginY={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          {/* refactored below */}
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
