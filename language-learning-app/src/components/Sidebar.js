import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box 
      as="nav" 
      width="100%" 
      height="calc(100% - 60px)"
      mt="calc(100% - 190px)"
      backgroundColor="white" 
      p="4"
    >
      <VStack spacing="4" align="left">
        <Text>Link 1123</Text>
        <Text>Link 2</Text>
        <Text>Link 3</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;