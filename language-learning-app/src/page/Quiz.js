import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Flex, Text, Center, VStack, Progress } from "@chakra-ui/react";
import Header from '../components/Header';
import BasicLanguage from "../data/BasicLanguage.json"

const Quiz = () => {

    const [selectedQuizItem, setSelectedQuizItem] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const buttonRefs = useRef([]);
    const [progress, setProgress] = useState([]);

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // const SelectRandomHiragana = () => {
        useEffect(() => {
        //Todo select 4 random unique hiragana.
        
        if (selectedQuizItem == null) {
            return;
        }

        // Flatten the JSON structure to get an array of all items
        const allItems = Object.values(BasicLanguage.hiragana).flat();

        // Function to get a random item from the array
        const getRandomItem = (array) => {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        };

        // Get on random item
        const chosenItem = getRandomItem(allItems);
        setSelectedQuizItem(chosenItem);

        // Remove the chosen item from the list
        const remainingItems = allItems.filter(item => item.roman !== chosenItem);

        // Shuffle the remaining items
        const shuffledItems = shuffleArray(remainingItems);

        // Select the first 4 items from the shuffled list
        const randomItems = shuffledItems.slice(0, 4);

        // Combine the chosen item with the 4 randomly selected items
        const combinedItems = [{ roman: chosenItem.roman, character: chosenItem.character}, ...randomItems];

        // Shuffle the combined list to mix the chosen item with the others
        const finalItems = shuffleArray(combinedItems);

        setSelectedItems(finalItems);
    }, []);  // Empty dependency array ensures this runs only once on initial render

    const answerChoices = (choices, index) => {
        console.log(choices);
        console.log("Clicked Answer Chocies!");

        // Disable the clicked button
        if (selectedQuizItem.roman != choices) {
            buttonRefs.current[index].disabled = true; 
        }
        
        if (selectedQuizItem.roman == choices) {
            buttonRefs.current[index].style.backgroundColor = "#3EA055";
            alert("Correct!");
        }
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
                        <Box>
                            {/* Content Quizs */}
                            <Box 
                                as="main" 
                                p="0"
                                borderRight="1px solid #000000"
                                mt="60px"
                                >
                                <Box>
                                    <Text p="12" color='gray.300' fontSize="24px">Learning</Text>
                                    <Text p="12" fontWeight="20px" color='white' fontSize="32px" mt="-100px">Basic Japanese</Text>
                                </Box>
                                <Box width="100vw" height="150px" p="12">
                                    <Box 
                                        marginRight="0px"
                                    >
                                        <Center>
                                            <Box
                                                width="500px"
                                                height="500px"
                                                borderRadius="15px"
                                                overflow="hidden"
                                                boxShadow="md"
                                                fontFamily="Arial, sans-serif"
                                                overflowX="scroll"                                            
                                            >
                                                {/* Top Section */}
                                                <Box
                                                    padding="20px"
                                                    height="350px"
                                                    // background="linear-gradient(180deg, gray.800, #ffffff)"
                                                    backgroundColor="gray.800"
                                                    backgroundRepeat='no-repeat'
                                                    backgroundSize='100%'
                                                    backdropFilter='auto' 
                                                    backdropBlur='80px'
                                                    color="white"
                                                    zIndex="0"
                                                >
                                                    <Box 
                                                        position="relative" 
                                                        zIndex="1" 
                                                        p={4} 
                                                        align="center"
                                                    >
                                                        <Text 
                                                            fontSize="62px" 
                                                            textShadow='1px 1px 15px #000000' 
                                                            fontWeight="bold" 
                                                            mb="4"
                                                            mt='25%'
                                                        >
                                                            {selectedQuizItem.character}
                                                        </Text>
                                                    </Box>
                                                </Box>
                                                {/* Bottom White Box */}
                                                <Box
                                                    backgroundColor="white"
                                                    padding="10px 20px"
                                                    color="gray.700"
                                                    height="100%"
                                                >
                                                    <Center>
                                                        <Flex 
                                                            justifyContent="space-between" 
                                                            textAlign="center"
                                                            marginTop="10%"
                                                        >
                                                            <VStack>
                                                                <Box>
                                                                    {selectedItems.map((item, i) => (
                                                                        <Button                                                                                
                                                                            marginRight="20px"
                                                                            backgroundColor="gray.200"
                                                                            borderRadius={5}
                                                                            border="2px dashed black"
                                                                            ref={ref => buttonRefs.current[i] = ref} // Assign ref to the button.
                                                                            onClick={() => answerChoices(item.roman, i)}
                                                                            key={i}
                                                                        >
                                                                            {item.roman}
                                                                        </Button>
                                                                    ))}
                                                                </Box>
                                                            </VStack>
                                                        </Flex>
                                                    </Center>
                                                </Box>
                                            </Box>
                                        </Center>
                                    </Box>
                                </Box>    
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Quiz