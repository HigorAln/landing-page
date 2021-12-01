import { 
  Input,
  Text,
  Box, 
  Flex, 
  Link, 
  Image, 
  Button, 
  Modal, 
  ModalCloseButton, 
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader
  } from "@chakra-ui/react";
import LinkNext from 'next/link'
import {ModalSignIn} from './ModalSignIn'
import { ModalSignUp } from "./ModalSignUp";
import { useState } from 'react'

interface NavbarComponentsProps {
  onOpen: ()=>void;
  onOpenSignUp: ()=> void;
}

export function NavBarComponent({onOpen, onOpenSignUp}: NavbarComponentsProps){
  return(
    <Flex h="5rem" w="100%" justify="center">
      <Flex h="5rem" maxW="1200px" w="1200px" align="center" justify="space-between">
        <Box w="">
          <LinkNext href="/">
          <a>
            <Image src='/logo.svg' alt="logo"  h="2rem" />
          </a>
          </LinkNext>
        </Box>
        <Box color="blue.700" fontWeight="600" w="45%" d="flex" justifyContent="space-around">
          <Link href="#about" _hover={{textDecoration:'none', opacity:"0.7"}}>About</Link>
          <Link href="#pricing" _hover={{textDecoration:'none', opacity:"0.7"}}>Princing</Link>
          <Link href="#social" _hover={{textDecoration:'none', opacity:"0.7"}}>Testimonials</Link>
          <Link href="#contact" _hover={{textDecoration:'none', opacity:"0.7"}}>Contact</Link>
        </Box>
        <Box>
          <Button bg="transparent" color="blue.700" onClick={onOpen}>Sign In</Button>
          <Button bg="blue.700" color="white" _hover={{opacity:"0.7"}} _active={{}} onClick={onOpenSignUp}>Sign Up</Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export function NavBar(){
  const {isOpen, onClose, onOpen} = useDisclosure()
  const [openSignUp, setOpenSignUp] = useState(false)
  const handleOpen = ()=> setOpenSignUp(true)
  const handleClose = ()=> setOpenSignUp(false)
  return(
    <>
      <ModalSignIn isOpen={isOpen} onClose={onClose} />
      <ModalSignUp isOpen={openSignUp} onClose={handleClose} />
      <NavBarComponent onOpen={onOpen} onOpenSignUp={handleOpen}/>
    </>
  )
}