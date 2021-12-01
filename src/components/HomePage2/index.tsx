import { Flex, Text, Box, Image } from '@chakra-ui/react'

export function HomePage2(){
  return(
    <Flex flexDir="column" w="100%" h="100vh" mt="20px">
      <Flex>
        <Image src="/how-to-section.svg" alt="image for example" />
      </Flex>
    </Flex>
  )
}