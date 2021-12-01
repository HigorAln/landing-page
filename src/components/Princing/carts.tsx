import { Flex, Text, Button, Icon, Divider} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CartsProps {
  children: ReactNode;
  button: string;
  price?: string;
  title: string;
  info?:string;
  active?: boolean;
  perProject?:Boolean;
}

export function Carts({
  button,
  children,
  title,
  info,
  price,
  perProject = true,
  active = false
}: CartsProps){
  return(
    <Flex
      h="500px"
      w="300px"
      py="30px"
      px="30px"
      flexDir="column"
      align='center'
      borderRadius="20px"
      boxShadow="0 0 20px #bbb"
      mx={active ? "30px" : ''}
      mt={active ? "-20px" : ''}
      bg={active ? "blue.700" : ''}
    >
      <Text fontSize="22px" fontWeight="bold" color={active ? "white" : "blue.700"} letterSpacing="1px" mb="15px">{title}</Text>
     {perProject && (
      <Text fontSize="26px" fontWeight="bold" color={active ? "blue.200" : "blue.700"} textAlign='center'>
        {price}
        <br/>
        <Text fontSize="14px" color={active ? "white" : 'blue.700'} fontWeight="400" mt='-5px' mb="15px">
          per project
        </Text>
      </Text>
     )}
      {info && (
          <Text fontSize="14px" color='gray.600'>
            {info}
          </Text>
        )}
      <Divider />
      <Flex
        flexDir="column"
        h="19rem"
        w="100%"
        align="flex-start"
        pl="40px"
        pt="30px"
        color={active ? "white" : "blue.700"}
      >
        {children}    
      </Flex>
      <Button
        border="1px solid #51C9FF"
        color={active ? "blue.700" : "#51C9FF"}
        fontWeight="400"
        borderRadius="5px"
        w="10rem"
        h="3rem"
        bg={active ? "blue.200" : ''}
        _hover={{opacity:"0.8"}}
      >
        {button}
      </Button>
    </Flex>
  )
}