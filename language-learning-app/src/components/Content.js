import React from 'react';
import { Box, Text, Flex, VStack, Button } from '@chakra-ui/react';
import Lesson from './Lesson';

const Content = () => {
  return (
    <Box 
      as="main" 
      p="0"
      borderRight="1px solid #000000"
      mt="60px"
    >
      <Box>
        <Text p="12" color='gray.300' fontSize="24px">Welcome to</Text>
        <Text p="12" fontWeight="20px" color='white' fontSize="32px" mt="-100px">FluentSea Explore</Text>
      </Box>
        <Box width="100vw" height="150px" p="12">
          <Text color='white' fontSize="32px">Featured</Text>
        </Box>
      <Flex marginTop="-70px">
        <Lesson />
      </Flex>
    </Box>
  );
};

export default Content;