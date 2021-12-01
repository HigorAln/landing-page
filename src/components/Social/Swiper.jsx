import {Text, Image, Box, Flex} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './swipper.module.scss'


export function SwiperComponents(){
  return(
    <Swiper>
      <SwiperSlide className={styles.cart}>
        <Box bg="blue.200" w="22rem" h="100%" borderRadius="15px" d="grid" placeItems="center" >
          <Image src="/girl.svg" />
        </Box>
        <Flex w="45%" ml="70px" justify='center' flexDir='column'>
          <Text mb="25px" color="gray.500" letterSpacing="1px">
          “With the traditional resumes I used to apply for jobs and would get only a few calls. 
          But after creating a video resume, I’ve got 9/10 calls. 
          And I love the simplicity of the video creation process being a non techie.”
          </Text>
          <Text color='blue.700' fontWeight="600">
            Linda Jermy
          </Text>
          <Text fontSize="13px" color="gray.500" mt='5px'>
            Commerce Student
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide className={styles.cart}>
      <Box bg="blue.200" w="22rem" h="100%" borderRadius="15px" d="grid" placeItems="center" >
          <Image src="/girl.svg" />
        </Box>
        <Flex w="45%" ml="70px" justify='center' flexDir='column'>
          <Text mb="25px" color="gray.500" letterSpacing="1px">
          “With the traditional resumes I used to apply for jobs and would get only a few calls. 
          But after creating a video resume, I’ve got 9/10 calls. 
          And I love the simplicity of the video creation process being a non techie.”
          </Text>
          <Text color='blue.700' fontWeight="600">
            Linda Jermy
          </Text>
          <Text fontSize="13px" color="gray.500" mt='5px'>
            Commerce Student
          </Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}