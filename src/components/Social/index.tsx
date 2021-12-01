import {Flex, Text} from '@chakra-ui/react'
import { SwiperComponents } from './Swiper'


export function Social(){
  return(
    <Flex h="100vh" w="100%" flexDir="column" pt="80px" id='social'>
      <Text fontSize="15px" color="blue.200" fontWeight="600">Social</Text>
      <Text fontSize="40px" color="blue.700" fontWeight="600"> What do our customers say?</Text>
      <Flex align="center" boxShadow="0 0 20px #ccc" borderRadius="15px" mt="30px">
        <SwiperComponents />
      </Flex>
    </Flex>
  )
}