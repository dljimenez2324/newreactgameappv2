import { SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";
import { Key } from "react";
// import { ScreenShots } from "../entities/ScreenShots";

interface Props {
    gameId: number;

}

const GameScreenShots = ({gameId}:Props) => {

    const {data, isLoading, error} = useScreenShots(gameId)

    console.log(data?.results[0].image);

    if(isLoading) return <Spinner/>
    if(error) throw error;


  return (
    <>
        <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
            {/* {data?.results.map(file => <Image key={file.id} src={file.image} />)} */}
            {data?.results.map((file: { id: Key | null | undefined; image: string | undefined; }) => <Image key={file.id} src={file.image}/>)}
        </SimpleGrid>
    </>
  )
}

export default GameScreenShots