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
import { useForm, SubmitHandler } from 'react-hook-form'

export interface ModalProps {
  isOpen: boolean;
  onClose: ()=> void;
}
interface HandleSignInProps {
  username: string;
  password: string
}

const handleClickSignIn: SubmitHandler<HandleSignInProps> = (data) => {
  console.log(data)
}

export function ModalSignIn({isOpen, onClose}: ModalProps){
  const { register, formState, handleSubmit } = useForm()
  const { errors } = formState;
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="30px">
        <ModalCloseButton />
        <ModalHeader w="100%">
          <Text textAlign="center" fontSize="3xl" color="blue.700">
            Sign In
          </Text>
        </ModalHeader>
        <ModalBody>
          <Flex as="form" onSubmit={handleSubmit(handleClickSignIn)} flexDir="column" w="100%" justifyContent="center" px="4rem">
            <Input placeholder="username" my="10px" {...register('username')}/>
            <Input type='password' placeholder="password" my="10px" {...register('password')}/>
            <Button
              type='submit'
              color="blue.200"
              bg="blue.700"
              mt="20px"
              _hover={{opacity:'0.8'
            }}>
              Enter
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}