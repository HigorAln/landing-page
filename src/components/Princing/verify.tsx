import {Text, Icon} from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi'
import { ReactNode } from 'react'

interface VerifyProps {
  children: ReactNode;
}

export function Verify({children}: VerifyProps){
  return(
    <Text fontSize="14px" m="7px">
      <Icon as={FiCheckCircle} mr="10px" fontSize="15px" color="blue.200"/>
      {children}
    </Text>
  )
}