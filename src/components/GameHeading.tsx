import { Heading } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"
import useGameQueryStore from "../store"

// interface Props {
//     gameQuery: GameQuery
// }

const GameHeading = () => {

    //// moved to useGenre
    // const {data: genres} = useGenres();
    // const genre = genres?.results.find((g) => g.id === gameQuery.genreId)

    //// moved to usePlatform
    // const { data: platforms} = usePlatforms();
    // const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)

    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    // now using our new hook useGenre
    const genre = useGenre(genreId)
    
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    // now we need to call and save the return of usePlatform hook
    const platform = usePlatform(platformId)

    // store a variable to hold this
    const heading=`${platform?.name  || '' } ${genre?.name || '' } Games`

  return (
    <>
        <Heading as={'h1'}>
            {heading}
        </Heading>
    </>
  )
}

export default GameHeading