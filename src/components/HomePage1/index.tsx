import { Flex, Text, Button, Icon, Image } from '@chakra-ui/react';
import {FiPlayCircle} from 'react-icons/fi'


export function HomePage1(){
  return(
    <Flex
      h="calc(100vh - 5rem)"
      w="100%"
    >
      <Flex w="50%" h="100%" pr="7rem" justify="center" flexDir="column">
        <Text fontSize="lg" color="blue.200" fontWeight="600">Stand out of the crowd</Text>
        <Text fontSize="45px" fontWeight="700" color="blue.700">Create the Next Gen Video Resume</Text>
        <Image src="line.svg" h="1rem" alignSelf="flex-start" pl="1rem"/>
        <Text fontSize="18px" fontWeight="400" w="80%" mt="30px" color="gray.500">
          Get hired quickly by giving your resume the
          video look it deserves.
        </Text>
        <Flex w="90%" justify="space-around" h="60px" mt="35px">
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
      <Flex w="50%" h="100%" justify="center" align="center">
        <Image src="/image-welcome.svg" alt="image from example" />
      </Flex>

    </Flex>
  )
}