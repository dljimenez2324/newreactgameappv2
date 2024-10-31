import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronCompactDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"

// interface Props {
//     onSelectPlatform: (platform: Platform) => void
//     selectedPlatformId?: number
// }

const PlatformSelector = () => {

    const {data, error} = usePlatforms();

    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

    // const selectedPlatform = data?.results.find((p) => p.id === selectedPlatformId)
    //// now call our usePlatform hook
    const selectedPlatform = usePlatform(selectedPlatformId)

     if(error) return

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronCompactDown/>} >{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {data?.results.map((platform) => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector