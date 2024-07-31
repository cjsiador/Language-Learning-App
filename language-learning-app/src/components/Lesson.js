import React from 'react';
import LessonData from '../data/LessonData.json';
import { Box, Image, Text, Button, Flex, HStack } from '@chakra-ui/react';
import { FiPlay } from "react-icons/fi";

const Lesson = () => {

    return(
        <>
        <Box width="100vw" align="center">
            <Box
                height="450px"
                overflowY="scroll"
                align="center"
                // backgroundColor="white"
                borderRadius="16px"
            >
            <HStack>
                {LessonData.map((LessonData, i) => {                        
                    return (
                        <Box 
                            key={i}
                        >
                            <Box
                                width="400px"
                                borderRadius="15px"
                                overflow="hidden"
                                boxShadow="md"
                                fontFamily="Arial, sans-serif"
                                overflowX="scroll"
                                marginTop="7%"
                                __css={{
                                    '::-webkit-scrollbar:horizontal': {
                                      width: '4px',
                                    },
                                    '&::-webkit-scrollbar-track:horizontal': {
                                      width: '6px',
                                    },
                                    '&::-webkit-scrollbar-thumb:horizontal': {
                                      background: "#000000",
                                      borderRadius: '30px',
                                    },
                                  }}
                            >
                                {/* Top Section */}
                                <Box
                                    padding="20px"
                                    height="300px"
                                    background="linear-gradient(145deg, #9f7aea, #805ad5)"
                                    color="white"
                                >
                                    <Text fontSize="32px" textShadow='1px 1px 7px #000000' fontWeight="bold" mb="4">
                                        {LessonData.title}
                                    </Text>
                                </Box>
                                {/* Bottom White Box */}
                                <Box
                                    backgroundColor="white"
                                    padding="10px 20px"
                                    color="gray.700"
                                >
                                        <Button
                                            height='80px'
                                            width='80px'
                                            borderRadius="100%"
                                            backgroundColor="white"
                                            color="#805ad5"
                                            // boxShadow="md"
                                            _hover={{ bg: "gray.200" }}
                                            mt="-70px"
                                            ml="225px"
                                            borderWidth='1px'
                                            borderColor='gray'
                                            boxShadow="0 0 10px 2px rgba( 0, 0, 0, 0.2)"
                                        >
                                            <FiPlay />
                                        </Button>
                                    <Flex justifyContent="space-between" textAlign="center">
                                    <Box>
                                        <Text fontSize="lg" fontWeight="bold">13</Text>
                                        <Text fontSize="sm">Chapters</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize="lg" fontWeight="bold">149</Text>
                                        <Text fontSize="sm">Items</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize="lg" fontWeight="bold">0%</Text>
                                        <Text fontSize="sm">Complete</Text>
                                    </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                        )
                    })
                }
            </HStack>
            </Box>
            </Box>
        </>
    );
};

export default Lesson;