// use a switch to toggle light and dark mode

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();


  return (
    <>
        <HStack>
            {/* NOTICE LIGHT AND DARK MODE TOGGLE AND TURNERY */}
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            {colorMode === 'dark' ? <Text whiteSpace={"nowrap"}>Dark Mode</Text> : <Text whiteSpace={"nowrap"}>Light Mode</Text> }
        </HStack>
    </>
  )
}

export default ColorModeSwitch