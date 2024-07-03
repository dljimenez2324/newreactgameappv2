import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ColorModeSwitch from './components/ColorModeSwitch'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

// REFACTORED
export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: String
  searchText: string
}

const App = () => {
//  REFACTORED
  // const [selectedGenre, setSelectedGenre] = useState<Genre |null>(null)

  // // rememeber we put our state where the parent component is so app is the parent for this usestate below
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      {/* create our responsive layout with Chakra UI Grid */}
      {/* Nav, aside, main ______ responsive for desktop and mobile */}
      <Grid templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //992
      }}>
        <GridItem area="nav" bg=''>
          <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}/>
          
        </GridItem>

        <Show above='lg'>
          <GridItem area="aside" padding={1.5}>
            {" "}
            <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>

        </Show>

        <GridItem area="main" >
          <Box padding={5} >
            <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5} marginY={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform}) }/>
              <SortSelector onSelectedSortOrder={sortOrder => setGameQuery({...gameQuery, sortOrder})}/>
            </HStack>
          </Box>
          {/* refactored below */}
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App