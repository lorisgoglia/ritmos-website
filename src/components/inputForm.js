// src/components/InputForm.js
import React, { useState } from 'react';
import { Flex, Input, Button, Box, Text, Heading } from '@chakra-ui/react';

const InputForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.currentTarget.email.value);
    setSubscribed(true);
  };

  return (
    <Flex direction="column" align="center" justify="center" bg="" p="8" color="black">
      <Box mt="4" w="full" textAlign="center">
        {subscribed ? (
          <Text fontSize="lg" mb="4">
            Thank you for subscribing!
          </Text>
        ) : (
          <>
          
              <Heading fontSize="3xl" fontWeight="bold" mb="4">
                Subscribe to our newsletter
              </Heading>
              <Text mb="6">
                Stay up-to-date with the latest news, events, and exclusive offers!
              </Text>
           
            <form onSubmit={handleSubmit}>
              <Flex>
                <Input type="email" placeholder="Enter your email" variant="filled" mr="2" isRequired name="email" />
                <Button type="submit" colorScheme="blue">
                  Subscribe
                </Button>
              </Flex>
            </form>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default InputForm;
