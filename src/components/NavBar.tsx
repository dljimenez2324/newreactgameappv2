import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

//// for global statemenagement we delete the interface and props
// interface Props {
//   onSearch: (searchText: string) => void
// }

const NavBar = () => {
  return (
    <>
        <HStack>
            <Image src={logo} boxSize={12}/>
            {/* <SearchInput onSearch={onSearch}/> */}
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    </>
  )
}

export default NavBar