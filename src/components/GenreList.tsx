//imports
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
    onSelectedGenre: (genre:Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {

    //usestates
    // const {data} = useGenres<Genre>('/genres');
    
    const {data, isLoading} = useData<Genre>('/genres');

    //useeffects




  return (
    
    <>
        <List paddingBottom={5}>
                {isLoading && <Spinner/>}

                {data.map(genre => <ListItem key={genre.id} marginBottom={3}>
                
                    <HStack>
                        <Image objectFit={'cover'} boxSize={16} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button color={genre.id === selectedGenre?.id ? 'blue.500' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(genre)} >
                                
                                {genre.name}

                        </Button>
                    </HStack>
                </ListItem>)}
            
        </List>
    
    </>
  )
}

export default GenreList