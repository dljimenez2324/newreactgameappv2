import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../hooks/useGenres"
// import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {

    const {data: genres} = useGenres();
    const genre = genres?.results.find((g) => g.id === gameQuery.genreId)

    //// moved to usePlatform
    // const { data: platforms} = usePlatforms();
    // const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)

    // now we need to call and save the return of usePlatform hook
    const platform = usePlatform(gameQuery.genreId)

    // store a variable to hold this
    const heading=`${platform?.name  || 'All Platforms' }, ${genre?.name || 'All Genres' }`

  return (
    <>
        <Heading as={'h1'}>
            {heading}
        </Heading>
    </>
  )
}

export default GameHeading