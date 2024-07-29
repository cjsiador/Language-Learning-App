import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { InputRightElement, InputGroup, Input, Box, Center, Text, Button, VStack } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons' 

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState();
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setIsEmailValid(regex.test(email));
    }

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleShowPassword = () => {
        setShow(!show);
    }
 
    return(
        <>
            <Box backgroundImage='linear-gradient(to top, #00c6fb 0%, #005bea 100%)' width='100wh' height='100vh'>
                <Center>
                    <Box backgroundImage='linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)' width="50vw" minWidth="300px" maxWidth="500px" marginTop='25vh' height='600px' borderColor="#36454F" borderRadius='lg' borderWidth='4px' boxShadow='dark-lg'>
                        <Center>
                            <Box alignContent='center' width='90%' height='500px' marginTop='50'>
                                <VStack>
                                    <Text
                                        fontSize='30px'
                                        fontWeight='bold'
                                        textAlign='center'
                                    >
                                        Sign in
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
                                        bgColor=''  
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
                                    <Text 
                                        as='b'
                                        width="80%"
                                        textAlign='right' 
                                        fontSize='16px'
                                        bgGradient='linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
                                        bgClip='text'
                                    >
                                        <NavLink to="/forgetpassword">
                                            Reset Password
                                        </NavLink>
                                    </Text>                          
                                    <Button
                                        type="submit"
                                        disabled={!isEmailValid}                           
                                        onClick={onLogin}
                                        margin={3}
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
                                        Login                                                                  
                                    </Button>
                                    <Text>
                                        No account yet? {' '}
                                        <Text
                                            as='b'
                                            width="80%"
                                            textAlign='right' 
                                            fontSize='16px'
                                            bgGradient='linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
                                            bgClip='text'
                                        >
                                            <NavLink to="/signup">
                                                Create an account
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
 
export default Login