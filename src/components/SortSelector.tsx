import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react"
import { BiSolidChevronDown } from "react-icons/bi"

interface Props {
    onSelectedSortOrder: (sortOrder: string) => void
}

const SortSelector = ({onSelectedSortOrder}:Props) => {

    const sortOrders = [

        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]
    
    const [selectedSort, setSelectedSort] = useState('')

    const handleSelectedSort = (value:string, label:string) => {
        setSelectedSort(label);
        onSelectedSortOrder(value);
    }

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Ordered by {selectedSort || 'Relevance'}</MenuButton>
            <MenuList>
                {/*  removed and replaced by a map of the sortOrders array of objects 
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem> */}
                {sortOrders.map(order => <MenuItem onClick={()=> handleSelectedSort(order.value, order.label)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector