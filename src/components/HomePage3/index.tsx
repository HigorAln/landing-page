import { Flex, Box, Text, Image, Icon, Button } from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi'

export function HomePage3(){
  return(
    <Flex h="100vh" w="100%" mt="20px" id="about">
      <Flex w="50%" flexDir="column" pr="30px" justify="center">
        <Text fontSize="20px" color="blue.200" fontWeight="600">We're on a mission!</Text>
        <Text fontSize="45px" color="blue.700" fontWeight="700">About Visume</Text>
        <Text fontSize="18px" color="blue.700" mt="20px" fontWeight='600'>
          Trusted by peaple around 
          <span style={{color:"#f87f81"}}> 38 countries</span>
        </Text>
        <Text fontWeight="400" lineHeight="33px" color="#888" w="80%" mt="20px">
          With the Gen Z going the video way, the future rectruitement is going to be through video resumes. 
          It saves the HR people a ton of time in screening profiles. 
          And it makes it more human to  present themseleves than plain texts for the employees.
          <br/><br/>
          With 20+ years on the video production industry, you’re on the right hands. 
        </Text>
        <Flex w="80%" justify="space-between" h="60px" mt="35px">
          <Button
            bg="blue.700"
            color="white"
            fontWeight='400'
            h="100%"
            w="40%"
            _hover={{opacity:"0.9"}}
          >
            Get Started
          </Button>
          <Button bg="transparent" color="blue.700" h="100%" w="40%">
            <Icon as={FiPlayCircle} mr="10px" fontSize="1.5rem"/>
            Watch Demo
          </Button>
        </Flex>
      </Flex>
      <Flex mr="-130px" zIndex="1000">
        <Image src="/info-danny.svg" mt="150px"/>
      </Flex>
      <Flex >
        <Image src="/image-danny.svg" />
      </Flex>
    </Flex>
  )
}