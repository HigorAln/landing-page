import {Flex, Text, Icon} from '@chakra-ui/react'
import { CartsComponents } from './cartsComponent'

export function Pricing(){
  return(
    <Flex flexDir="column" mt="30px" h="100vh" py="20px" id="pricing">
      <Text fontSize="15px" color="blue.200" fontWeight='600'>Pricing</Text>
      <Text fontSize="38px" fontWeight='700' color="blue.700">How much to pay?</Text>
      <Text fontSize="15px" color='gray.500' my="15px"> You can choose the most app pricing option for your needs.</Text>
      <Flex w="100%" justify="center" mt="35px">  
        <CartsComponents />
      </Flex>
    </Flex>
  )
}