import {Flex, Text, Input, FormControl, FormLabel, Textarea, Button } from '@chakra-ui/react'
import { useForm, SubmitHandler} from "react-hook-form"

interface HandleTalk {
  name: string;
  email: string;
  number: string;
  education?: string;
  description: string;
}

export function Formulario(){
  const { register, formState, handleSubmit } = useForm()
  const { errors } = formState;

  const handleClickTalk: SubmitHandler<HandleTalk> = (data) =>{
    console.log(data)
  }

  return(
    <Flex align="center" flexDir='column' h="100vh" id="contact">
      <Text color='blue.200' fontWeight='600' fontSize="18px" mb="5px">Lest's Talk</Text>
      <Text color="blue.700" fontWeight='700' fontSize="40px" mb="20px">We're here to help you!</Text>
      <Flex
        h="90%"
        w="100%"
        bg="blue.200"
        justify="center"
      >
       <Flex as='form' onSubmit={handleSubmit(handleClickTalk)} w="100%" align="center" flexDir="column" mt="20px">
         <Flex w="70%" justify="space-between" m="15px">
           <FormControl bg="white" borderRadius="15px" overflow="hidden" w="47%">
             <FormLabel pl="15px" pt="5px" color="gray.500" fontSize="15px">Name</FormLabel> 
             <Input type="text" border="0" pb="5px" _focus={{}} letterSpacing="0.5px" {...register('name')}/>
           </FormControl>
           <FormControl bg="white" borderRadius="15px" overflow="hidden" w="47%">
             <FormLabel pl="15px" pt="5px" color="gray.500" fontSize="15px">Your email</FormLabel> 
             <Input type="email" border="0" pb="5px" _focus={{}} letterSpacing="0.5px" {...register('email')}/>
           </FormControl>
         </Flex>

         <Flex w="70%" justify="space-between" m="15px">
           <FormControl bg="white" borderRadius="15px" overflow="hidden" w="47%">
             <FormLabel pl="15px" pt="5px" color="gray.500" fontSize="15px">Your Mobile Number</FormLabel> 
             <Input
               type="text"
               border="0"
               pb="5px"
               _focus={{}}
               letterSpacing="0.5px"
               placeholder="Example: xx x xxxx xxxx" 
               {...register('number')}
              />
           </FormControl>
           <FormControl bg="white" borderRadius="15px" overflow="hidden" w="47%">
             <FormLabel pl="15px" pt="5px" color="gray.500" fontSize="15px">Education / Professon (Optional)</FormLabel> 
             <Input type="text" border="0" pb="5px" _focus={{}} letterSpacing="0.5px" {...register('education')}/>
           </FormControl>
         </Flex>

         <Flex w="70%" justify="space-between" mt="10px">
           <FormControl bg="white" borderRadius="15px" overflow="hidden" h="15rem">
             <FormLabel pl="15px" pt="5px" color="gray.500" fontSize="15px">Description</FormLabel>
             <Textarea border="0" pb="5px" _focus={{}} h="15rem" letterSpacing="0.5px" {...register('description')}/>
           </FormControl>
         </Flex>
         <Flex w="70%" justify="center" mt="25px">
            <Button w="9rem" h="3rem" bg="blue.700" color="white" mb="20px" _hover={{opacity:"0.8"}} type='submit'>
             Let's Talk
            </Button>
         </Flex>
        
       </Flex>
      </Flex>
    </Flex>
  )
}