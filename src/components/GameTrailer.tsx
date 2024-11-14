import { Spinner } from "@chakra-ui/spinner";
import useTrailers from "../hooks/useTrailers";
import { AspectRatio } from "@chakra-ui/react";

interface Props {
    gameId: number;
}


const GameTrailer = ({gameId}: Props) => {

    const {data, error, isLoading} = useTrailers(gameId);

    console.log(data)

    if(isLoading) return <Spinner/>

    if(error) throw error;

    const first = data?.results[0]

  return first ? (
    <>
        <AspectRatio>
            <video
                poster={first.preview}
                autoPlay={true}
                controls
                title={first.name}
                src={first.data[480]}
                >

            </video>
        </AspectRatio>
    </>
  ) : null;
}

export default GameTrailer