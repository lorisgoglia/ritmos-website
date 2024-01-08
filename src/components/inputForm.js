// src/components/InputForm.js
import React, { useState } from 'react';
import { Flex, Input, Button, Box, Text, Heading, Alert, AlertIcon } from '@chakra-ui/react';

const InputForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.currentTarget.email);
    setSubscribed(true);
  };

  return (
    <footer>
    <Flex direction="column" align="center" justify="center" bg="" p="8" color="black">
      <Box mt="4" w="full" textAlign="center">
        {subscribed ? (

          <>
                        
          <Heading fontSize="3xl" fontWeight="bold" mb="4">
            Subscribe to our newsletter
          </Heading>
          <Text mb="6">
            Stay up-to-date with the latest news, events, and exclusive offers!
          </Text>

          <form onSubmit={handleSubmit}>
          <Flex>
            
            <Input type="email" title="Email example: ritmos@gmail.com" placeholder="Enter your email" aria-label="Enter your email to subscribe" variant="filled" mr="2" isRequired name="Enter your email" autocomplete="email" aria-required="true"/>
            <Button 
              type="submit" 
              color="#ffffff"
              bgColor="#2b74b9"
              aria-label='Click the button to subscribe'
              _hover={{ bgColor: '#125580' }}
              isDisabled="true"
              
              >
              Subscribe
            </Button>
          </Flex>
          </form>

          <Alert status='success' mt={5} role='status'>
          <AlertIcon />
          Thank you for subscribing!
        </Alert>
        </>
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
                
                <Input type="email" title="Email example: ritmos@gmail.com" placeholder="Enter your email" aria-label="Enter your email to subscribe" variant="filled" mr="2" isRequired name="Enter your email" autocomplete="email" aria-required="true"/>
                <Button 
                  type="submit" 
                  color="#ffffff"
                  bgColor="#2b74b9"
                  aria-label='Click the button to subscribe'
                  _hover={{ bgColor: '#125580' }}
                  
                  >
                  Subscribe
                </Button>
              </Flex>
            </form>
          </>
        )}
      </Box>
    </Flex>
    </footer>
  );
};

export default InputForm;
