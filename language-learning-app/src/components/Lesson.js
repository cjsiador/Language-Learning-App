import React, { useRef } from 'react';
import LessonData from '../data/LessonData.json';
import { Box, Text, Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import { FiPlay } from "react-icons/fi";
import useDragScroll from '../hooks/useDragScroll';

const Lesson = () => {
    // const scrollRef = useRef(null);

    const {
        scrollRef,
        handleMouseDown,
        handleMouseLeaveOrUp,
        handleMouseMove,
    } = useDragScroll();

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Box width="100vw" align="center">
                <Flex>
                    <HStack>
                        <Button 
                            onClick={scrollLeft}
                            // onMouseDown={scrollLeft}
                        >
                            Scroll Left
                        </Button>
                        <Button 
                            onClick={scrollRight}
                            onMouseDown={scrollRight}
                        >
                            Scroll Right
                        </Button>
                    </HStack>
                </Flex>
                <Box
                    height="450px"
                    overflowX="scroll"
                    align="center"
                    borderRadius="16px"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                    cursor="grab"
                    _active={{ cursor: "grabbing" }}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        scrollbarWidth: 'none',
                        '-ms-overflow-style': 'none',
                    }}
                >
                    <HStack>
                        <Box width="40px" height="50px">
                            <Spacer width="40px" />
                        </Box>
                        {LessonData.map((lesson, i) => (
                            <Box style={{ userSelect: "none" }} key={i} marginRight="20px">
                                <Box
                                    width="400px"
                                    borderRadius="15px"
                                    boxShadow="md"
                                    fontFamily="Arial, sans-serif"
                                    marginTop="7%"
                                >
                                    {/* Top Section */}
                                    <Box
                                        padding="20px"
                                        height="300px"
                                        backgroundImage={`url(${lesson.imageUrl})`}
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="cover"
                                        backdropFilter="auto"
                                        backdropBlur="80px"
                                        color="white"
                                        zIndex="0"
                                    >
                                        <Box position="relative" zIndex="1" p={4}>
                                            <Text
                                                fontSize="32px"
                                                textShadow="1px 1px 15px #000000"
                                                fontWeight="bold"
                                                mb="4"
                                            >
                                                {lesson.title}
                                            </Text>
                                        </Box>
                                    </Box>
                                    {/* Bottom White Box */}
                                    <Box backgroundColor="white" padding="10px 20px" color="gray.700">
                                        <Button
                                            height="80px"
                                            width="80px"
                                            borderRadius="100%"
                                            backgroundColor="white"
                                            color="#805ad5"
                                            _hover={{ bg: "gray.200" }}
                                            mt="-70px"
                                            ml="225px"
                                            borderWidth="1px"
                                            borderColor="gray"
                                            boxShadow="0 0 10px 2px rgba(0, 0, 0, 0.2)"
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
                        ))}
                        <Box width="40px" height="50px">
                            <Spacer width="40px" />
                        </Box>
                    </HStack>
                </Box>
            </Box>
        </>
    );
};

export default Lesson;