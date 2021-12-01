import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Flex,
  Input,
  Button,
  Text
} from '@chakra-ui/react'
import { ModalProps } from './ModalSignIn'
import {useForm, SubmitHandler } from 'react-hook-form'

interface HandleProps {
  name: string;
  username: string;
  email: string;
  passoword: string;
  confirmPassword: string;
}

export function ModalSignUp({isOpen, onClose}: ModalProps){
  const { register, formState, handleSubmit } = useForm()
  const { errors } = formState;

  const handleClickSignUp: SubmitHandler<HandleProps> = (data) =>{
    console.log(data)
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="30px">
        <ModalCloseButton />
        <ModalHeader w="100%">
          <Text textAlign="center" fontSize="3xl" color="blue.700">
            Sign Up
          </Text>
        </ModalHeader>
        <ModalBody>
          <Flex as="form" onSubmit={handleSubmit(handleClickSignUp)} flexDir="column" w="100%" justifyContent="center" px="4rem">
            <Input type='text' placeholder="Your name completly" my="10px" {...register('name')}/>
            <Input placeholder="Username" my="10px" {...register('username')}/>
            <Input type='email' placeholder="Email" my="10px" {...register('email')}/>
            <Input type='password' placeholder="Password" my="10px" {...register('password')}/>
            <Input type='password' placeholder="Confirm password" {...register('confirmPassword')}/>
            <Button type='submit' color="blue.200" bg="blue.700" mt="20px" _hover={{opacity:'0.8'}}>Enter</Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}