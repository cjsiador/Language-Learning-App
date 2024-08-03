import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Flex, Text, Center, VStack, Progress, SlideFade, useDisclosure } from "@chakra-ui/react";
import Header from '../components/Header';
import BasicLanguage from "../data/BasicLanguage.json"

const Quiz = () => {

    const [selectedQuizItem, setSelectedQuizItem] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const [isContinuing, setContinuing] = useState(false);
    const [isQuizDone, setQuizDone] = useState(false);
    
    const buttonRefs = useRef([]);
    const slideRef = useRef();
    const titleNameRef = useRef(null);
    const descriptionRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const [quizIndex, setQuizIndex] = useState(1)

    const { isOpen, onToggle } = useDisclosure()

    const totalQuiz = 7;

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const SelectRandomHiragana = () => {
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
        const remainingItems = allItems.filter(item => item.roman !== chosenItem.roman);

        // Shuffle the remaining items
        const shuffledItems = shuffleArray(remainingItems);

        // Select the first 4 items from the shuffled list
        const randomItems = shuffledItems.slice(0, 4);

        // Combine the chosen item with the 4 randomly selected items
        const combinedItems = [{ roman: chosenItem.roman, character: chosenItem.character}, ...randomItems];

        // Shuffle the combined list to mix the chosen item with the others
        const finalItems = shuffleArray(combinedItems);

        setSelectedItems(finalItems);
    }

    const answerChoices = (choices, index) => {
        // Disable the clicked button
        if (selectedQuizItem.roman !== choices) {
            buttonRefs.current[index].disabled = true;
            buttonRefs.current[index].style.backgroundColor = "#B22222"
            onToggle();
            slideRef.current.style.backgroundColor= '#E53E3E';
            titleNameRef.current.innerText = 'Correct solution:'
            descriptionRef.current.innerText = `${selectedQuizItem.roman}`;
            setContinuing(false);
        }
        
        if (selectedQuizItem.roman === choices) {
            buttonRefs.current[index].style.backgroundColor = "#3EA055";
            setQuizIndex(quizIndex => quizIndex + 1);
            setProgress((quizIndex/totalQuiz) * 100);
            onToggle();
            slideRef.current.style.backgroundColor = '#38A169';
            titleNameRef.current.innerText = 'Good!';
            descriptionRef.current.innerText = '';
            setContinuing(true);
        }
    }

    useEffect(() => {
        SelectRandomHiragana();
        setQuizDone(false);
    }, []);  // Empty dependency array ensures this runs only once on initial render

    const continueHandle = () => {
        if (isContinuing === true){
            if(progress > 100) {
                setQuizDone(true);  // WIP DOOO SOME THING ABOUT THIS. HAVE A POPUP OR SOMETHING
            } else {
                SelectRandomHiragana();
            }
        }
        
        SelectRandomHiragana();
        setContinuing(false);
        onToggle();
        resetAnswerChoices();
    }

    const resetAnswerChoices = () => {
        buttonRefs.current.forEach((currentRef, index) => {
            if (currentRef) {
                currentRef.disabled = false;
                currentRef.style.backgroundColor = "#E2E8F0";
            }
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
                                        marginTop="-50px"
                                    >
                                        <Center>
                                            <Box
                                                width="500px"
                                                height="500px"
                                                borderRadius="15px"
                                                overflow="hidden"
                                                boxShadow="dark-lg"
                                                fontFamily="Arial, sans-serif"
                                                borderWidth="2px"
                                                borderColor="black"                                                                                                                                  
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
                                                    <Progress mt="-20px" marginLeft="-20px" borderRadius="15px" colorScheme='green' backgroundColor="white" value={progress} width="500px"></Progress>
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
                                                            mt='20%'
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
                                        <Box
                                            position="fixed"
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            p={0}
                                            zIndex={10} // Adjust zIndex as needed
                                        >
                                            <SlideFade in={isOpen}>
                                                <Flex
                                                    p='40px'
                                                    color='white'
                                                    mt='2'
                                                    ref={slideRef}
                                                    rounded='md'
                                                    shadow='md'
                                                    justifyContent="space-between"
                                                    alignItems='center'
                                                >
                                                    <Flex direction="column">
                                                        <Text 
                                                            ref={titleNameRef}
                                                        />
                                                        <Text
                                                            fontStyle='b'
                                                            ref={descriptionRef}
                                                        />
                                                    </Flex>
                                                    <Button
                                                        onClick={continueHandle}    
                                                    >
                                                        Continue
                                                    </Button>
                                                </Flex>
                                            </SlideFade>
                                        </Box>
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