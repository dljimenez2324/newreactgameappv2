
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/imageUrl"


interface GameProps {
    
    game: Game
}

// to pass in data we need to pass in props
const GameCard = ({game}:GameProps) => {
  return (
    <>
        <Card height={'100%'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                {/* lets now add the icons of the platforms the game works with */}
                {/* {game.parent_platforms.map(x => <Text>{x.platform.name}</Text>)} */}
                {/*  we can destructure and get just what we need   see below */}
                {/* This below is being moved to the PlatformIconList component */}
                {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
                <HStack>
                  <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/>
                  <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize={'2xl'}>{game.name}</Heading>

            </CardBody>
        </Card>
    </>
  )
}

export default GameCard