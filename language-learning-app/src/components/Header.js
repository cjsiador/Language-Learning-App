import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Profile from "../assets/user.png"

const Header = () => {

  const navigate = useNavigate();

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
          as="header" 
          width="100%" 
          height="60px" 
          backgroundColor="005bea" 
          color="white" 
          display="flex" 
          alignItems="center" 
          justifyContent="right"
          bg='white'
      >
          <Button 
            backgroundImage={Profile}
            backgroundSize="cover"
            backgroundPosition="center" 
            borderRadius='100px' 
            width='40px' 
            height='40px' 
            mr='0.5rem' 
            onClick={handleLogout}
            _hover={{
              backgroundImage:{Profile}
            }}
          ></Button>
          {/* <Button justificationContent='left'></Button> */}
      </Box>
    </>
  );
};

export default Header;
