import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { FormControl, Input, Box, Center, Text, Button, VStack } from '@chakra-ui/react'

const ForgetPassword = () => {

    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState();
    const [isEmailValid, setIsEmailValid] = useState();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const auth = getAuth();

    const validateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setIsEmailValid(regex.test(email));
    }

    const onForgetPassword = async (e) => {
        e.preventDefault();
        
        setIsEmailValid(regex.test(email));

        if(!isEmailValid) {
            return;
        }

        await sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsEmailSent(true);
            setEmail('');
            setIsEmailValid(false);
            alert("Email Sent!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <>
            <Box backgroundImage='linear-gradient(to top, #00c6fb 0%, #005bea 100%)' width='100wh' height='100vh'>
                <Center>
                    <Box>
                        <FormControl id="reset-password-form">
                            <Box backgroundImage='linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)' width="50vw" minWidth="300px" maxWidth="500px" marginTop='25vh' height='600px' borderColor="#36454F" borderRadius='lg' borderWidth='4px'>
                                <Center>
                                    <Box alignContent='center' width='90%' height='500px' marginTop='50'>
                                        <VStack>
                                            <Text
                                                fontSize='30px'
                                                fontWeight='bold'
                                                textAlign='center'
                                            >
                                                Enter your email address
                                            </Text>
                                            <Text
                                                width="80%"
                                                textAlign='center'
                                                color='gray'
                                                fontSize='24px'
                                            >
                                                Recovering your account starts with the email linked to your account.
                                            </Text>
                                            {isEmailSent ? 
                                                <Text
                                                    width="80%"
                                                    color="purple"
                                                    margin={5}
                                                    textAlign='center'
                                                >If your email matches an existing account we will send you a recovery email within a few minutes. If you have not received an email check your spam folder or contact Support.</Text>
                                                :
                                                <Text></Text>
                                            }
                                            <Input
                                                width="80%"
                                                height="50px"
                                                type="email"
                                                label="Email address"
                                                value={email}
                                                onChange={(e) => validateEmail(e)}  
                                                required                                    
                                                placeholder="Email address"
                                                borderColor="#36454F" 
                                                margin={5}                             
                                            />
                                            <Button
                                                type="submit"
                                                disabled={!isEmailValid}
                                                onClick={onForgetPassword}
                                                margin={5}
                                                height='50px'
                                                bg='black'
                                                color='white'
                                                _hover={{
                                                    background: "#36454F",
                                                    color: "white",
                                                    opacity: "0.95",
                                                }}
                                            >
                                                Reset Password
                                            </Button>
                                        </VStack>
                                    </Box>
                                    </Center>
                            </Box>
                        </FormControl>
                    </Box>
                </Center>
            </Box>
        </>
    )

}

export default ForgetPassword