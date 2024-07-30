import React, {useState, useRef} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { InputRightElement, AlertDialogBody, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, useDisclosure, InputGroup, Input, Box, Center, Text, Button, VStack, AlertDialog } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons' 
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState();
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setIsEmailValid(regex.test(email));
    }
 
    const onSubmit = async (e) => {
      e.preventDefault();
     
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // // ..
            if(errorCode == "auth/email-already-in-use") {
                onOpen();
            }
        });
    }

    const handleShowPassword = () => {
        setShow(!show);
    }
 
    return (
        <>
            <Box backgroundImage='linear-gradient(to top, #00c6fb 0%, #005bea 100%)' width='100vw' height='100vh'>
                <Center>
                    <Box backgroundImage='linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)' width="50vw" minWidth="300px" maxWidth="500px" marginTop='15vh' height='600px' borderColor="#36454F" borderRadius='lg' borderWidth='4px' boxShadow='dark-lg'>
                        <Center>
                            <Box alignContent='center' width='90%' height='500px' marginTop='45'>
                                <VStack>          
                                    <AlertDialog
                                        isOpen={isOpen}
                                        leastDestructiveRef={cancelRef}
                                        onClose={onClose}
                                    >
                                        <AlertDialogOverlay>
                                            <AlertDialogContent
                                                marginTop='40vh'
                                            >
                                                <AlertDialogHeader fontSize='xl' fontWeight='bold'>
                                                    Email Already In Use!
                                                </AlertDialogHeader>

                                                <AlertDialogBody
                                                    fontSize='md'
                                                    color='red'
                                                >
                                                    {email} is already an account. Please try a different email address.
                                                </AlertDialogBody>

                                                <AlertDialogFooter>
                                                    <Button colorScheme='red' onClick={onClose} ml={3}>
                                                        Close
                                                    </Button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialogOverlay>
                                    </AlertDialog>
                                    <Text
                                        fontSize='30px'
                                        fontWeight='bold'
                                        textAlign='center'
                                    >
                                        Create an account
                                    </Text>                                   
                                    <Text
                                        width="80%"
                                        textAlign='left'
                                        marginTop='50px'
                                    >
                                        Email Addresss
                                    </Text>
                                    <Input
                                        width="80%"
                                        height="50px"
                                        type="email"
                                        label="Email address"                                   
                                        onChange={(e)=> validateEmail(e)}
                                        required                                    
                                        placeholder="Email Address"
                                        borderColor="#36454F" 
                                        margin={0}
                                        boxShadow='xl'     
                                    />
                                    <Text
                                        width="80%"
                                        textAlign='left'
                                    >
                                        Password
                                    </Text>
                                    <InputGroup width='80%'>
                                        <Input
                                            height="50px"
                                            id="password"
                                            name="password"
                                            type={show ? 'text' : 'password'}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            required                                    
                                            placeholder="Password"
                                            borderColor="#36454F" 
                                            margin={0}
                                            boxShadow='xl' 
                                        >
                                        </Input>
                                        <InputRightElement width='4.5rem' marginTop='5px'>
                                            {show ? 
                                            <ViewIcon 
                                                size='sm' 
                                                onClick={handleShowPassword}

                                            /> 
                                            : 
                                            <ViewOffIcon
                                                size='sm'
                                                onClick={handleShowPassword}
                                            />
                                            }
                                        </InputRightElement>
                                    </InputGroup>                      
                                    <Button
                                        type="submit"
                                        disabled={!isEmailValid}                           
                                        onClick={onSubmit}
                                        margin={10}
                                        height='50px'
                                        width='80%'
                                        backgroundImage='linear-gradient(to left, #00c6fb 0%, #005bea 100%)'
                                        color='white'
                                        borderColor="#36454F" 
                                        borderRadius='lg' 
                                        borderWidth='2px' 
                                        boxShadow='xl'
                                        _hover={{
                                            shadow: 'md',                                                    
                                            transform: 'translateY(0.5px)',
                                            transitionDuration: '0.1s',
                                            transitionTimingFunction: "ease-in-out"
                                        }}                                      
                                    >      
                                        Create an Account                                                                
                                    </Button>
                                    <Text>
                                        Have an account? {' '}
                                        <Text
                                            as='b'
                                            width="80%"
                                            textAlign='right' 
                                            fontSize='16px'
                                            bgGradient='linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
                                            bgClip='text'
                                        >
                                            <NavLink to="/login">
                                                Log In
                                            </NavLink>
                                        </Text>
                                    </Text>
                                </VStack>
                            </Box>
                        </Center>   
                    </Box>
                </Center>
            </Box>     
        </>
  )
}
 
export default Signup