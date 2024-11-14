import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"

//// for global statemenagement we delete the interface and props
// interface Props {
//   onSearch: (searchText: string) => void
// }

const NavBar = () => {
  return (
    <>
        <HStack>
            <Link to={'/'}>
              <Image src={logo} objectFit={'cover'} boxSize={14}/>
            </Link>
          

            {/* <SearchInput onSearch={onSearch}/> */}
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    </>
  )
}

export default NavBar