import React from "react";
import { Text, Box, Center, Image, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo/black_on_white_full.png'

const Landing = () => {

    return (
        <>            
            <Box 
                backgroundImage='linear-gradient(to top, #00c6fb 0%, #005bea 100%)' 
                width='100vw' 
                height='100vh'
            >
                <Flex 
                    alignContent={'center'}
                    justifyContent={'center'}
                    width={'100%'}
                    height={'100%'}
                >
                    <Grid
                        templateAreas={{
                            md: `"header image"
                                "description image"`,
                            base: `"image" 
                                "header" 
                                "description"`
                        }}
                        gridTemplateRows={'0.2fr 1fr'}
                        gridTemplateColumns={'0.90fr 1fr'}
                        h='400px'
                        w={{md: '800px', base: '400px'}}
                        gap='4'
                        color='black'
                        fontWeight='bold'
                        marginTop={{base: '100px', md: '200px'}}
                    >
                        <GridItem pl='2' area={'header'}>
                            <Text backgroundImage='radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,0,0,1) 0%, rgba(37,50,55,1) 100.2% )' fontWeight='bold' bgClip='text' align='left' fontSize='36px'>Welcome to FluentSea!</Text>
                        </GridItem>
                        <GridItem flexShrink={0} pl='2' width={{ md: 400, base: 400 }} area={'image'}>
                            <Center>
                                <Image height={'300px'} src={Logo}></Image>
                            </Center>
                        </GridItem>
                        <GridItem pl='2' area={'description'}>
                            <Text color='#E3E7E5' fontSize='16px' align='left'>
                                Start your voyage today and let the currents of knowledge 
                                carry you to new shores of communication and understanding. 
                                Bon voyage!
                            </Text>
                            <Flex columnGap={'20px'}>
                                <NavLink to="/signup">
                                    <Button 
                                        width='200px' 
                                        gap={5} 
                                        mt={10}
                                        backgroundImage='linear-gradient(to-tl, #00c6fb 0%, #005bea 100%)'
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
                                    >Try FluentSea for Free</Button>
                                </NavLink>
                                    {/* <Button width='150px' gap={5} mt={10}>Learn More</Button> */}
                            </Flex>
                        </GridItem>
                    </Grid>
                </Flex>
            </Box>
        </>
    )
}

export default Landing