import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
}


const ExpandableText = ({children}:Props) => {

    const [expanded, setExpanded] = useState(false)

    const limit = 300; // limit of the amount of non expanded text

    if(!children) return null; // this will return nothing and will prevent an error to ocure but we show that there are no deatails for that game passed in

    if(children.length <= limit) return <Text>{children}</Text>;  // this will return whole text if tru

    const summary = expanded ? children: children.substring(0,limit);  // if true return whole child otherwise then substring will be the text but limited from 0 up to the limit given

  return (
    <>
        <Text>
            {summary} ...
            <Button
                margin={1}
                size={'xs'}
                colorScheme="yellow"
                fontWeight={'bold'}
                onClick={() => setExpanded(!expanded)}    
            >
                {expanded ? 'Show less' : 'Show more'}
            </Button>
        </Text>
    </>
  )
}

export default ExpandableText