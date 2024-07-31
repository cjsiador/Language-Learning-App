import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { Text, Box, Center, Image, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                //   console.log("uid", uid)
            } else {
                // User is signed out
                // ...
                //   console.log("user is logged out")
                navigate('/login');
            }
          })
    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            navigate('/');
        });
    }
    
    return (
        <>
            <Box 
                backgroundImage='linear-gradient(to top, #00c6fb 0%, #005bea 100%)' 
                width='100vw' 
                height='100vh'
            >
                <Box height="100vh">
                    <Header />
                    <Flex height="calc(100%)" marginTop='-60px'>
                        <Box width="250px">
                            <Sidebar />
                        </Box>
                        <Box flex="1">
                            <Content />
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <button onClick={handleLogout}>
                Logout
            </button>
        </>
    );
};

export default Home;