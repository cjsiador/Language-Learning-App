import React from 'react';
import { Box, Text, Button, Image, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
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
          color="black" 
          display="flex" 
          alignItems="center" 
          justifyContent="right"
          bg='white'
      >
        <Menu>
          <MenuButton 
            as={Button} 
            backgroundImage={Profile} 
            backgroundSize="cover"
            backgroundPosition="center" 
            borderRadius='100px' 
            width='20px' 
            height='40px' 
            mr='0.5rem' 
            _hover={{
              backgroundImage:{Profile}
            }}
            _active={{
              backgroundImage:{Profile}
            }}
          >
          </MenuButton>
          <MenuList mr='-0.5rem'>
            <MenuGroup title='Profile'>
              <MenuItem
                _hover={{
                  opacity: '70%'
                }}
              >My Account</MenuItem>
              <MenuItem
                _hover={{
                  opacity: '70%'
                }}
                onClick={handleLogout}
              >Logout</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>


          {/* <Button 
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
          ></Button> */}
        
        
        
          {/* <Button justificationContent='left'></Button> */}
      </Box>
    </>
  );
};

export default Header;
