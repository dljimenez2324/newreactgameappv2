import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {

    // store a variable to hold this
    const heading=`${gameQuery.platform?.name  || 'All Platforms' }, ${gameQuery.genre?.name || 'All Genres' }`

  return (
    <>
        <Heading as={'h1'}>
            {heading}
        </Heading>
    </>
  )
}

export default GameHeading