import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
    onSearch: (searchText: string) => void
}


const SearchInput = ({onSearch}:Props) => {

    // ref doesnt do a rerender and to use it we do ref.current
    const ref = useRef<HTMLInputElement>(null)

  return (
    <>
        <form onSubmit = {e => {
                e.preventDefault();
                if(ref.current) onSearch(ref.current.value);
            }}>

            <InputGroup>
                <InputLeftElement children={<BsSearch/>}  />
                <Input ref={ref} borderRadius={20} placeholder="Search games ..." variant={'filled'} />
            </InputGroup>

        </form>
    </>
  )
}

export default SearchInput