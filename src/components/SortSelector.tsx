import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BiSolidChevronDown } from "react-icons/bi"
import useGameQueryStore from "../store"

// interface Props {
//     onSelectedSortOrder: (sortOrder: string) => void
// }

const SortSelector = () => {

    const sortOrders = [

        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]
    
    ////global management
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder )
    const setSortOrder = useGameQueryStore(s => s.setSortOrder);


    // const [selectedSort, setSelectedSort] = useState('')

    // const handleSelectedSort = (value:string, label:string) => {
    //     setSelectedSort(label);
    //     setSortOrder(value);
    // }

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Ordered by {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {/*  removed and replaced by a map of the sortOrders array of objects 
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem> */}
                {sortOrders.map(order => <MenuItem onClick={()=> setSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector