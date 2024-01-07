'use client';

import React from 'react';
import { Flex, Box, Text, Heading, Image, Input, Button } from '@chakra-ui/react';
import InputForm from '../../components/inputForm'


const Page: React.FC = () => {
  return (
    <Flex direction="column" align="center">
      {/* Hero Section with Image */}
      <Box position="relative" h="40vh" w="full">
        <Image
          src="/concertNight.jpg"  
          objectFit="cover"
          alt="About Us Hero Image"
          w="full"
          h="full"
        />
      </Box>

      {/* Text Section */}
      <Box textAlign="center" color="white" p="8" bg="black" w="full">
        <Heading fontSize="3xl" fontWeight="bold" mb="4">
          Welcome to Ritmos
        </Heading>
        <Text>
          At Ritmos, we are passionate about bringing the vibrant music scene of Madrid to your fingertips.
          &quot;Ritmos&quot; is a Spanish word that translates to &quot;Rhythms&quot; in English, and it perfectly encapsulates the heartbeat of our city&apos;s music culture.
        </Text>
        {/* Continue with the rest of your content */}
      </Box>

      {/* Contributor Section */}
      <Box mt="8" p="8" textAlign="center" w="full">
        <Heading fontSize="3xl" fontWeight="bold" mb="4" color="black">
          Meet Our Contributors
        </Heading>

        <Flex justify="center">
          {/* Contributor 1 */}
          <Box m="4" width="100%" textAlign="center">
            <Image
              src="/Xiaolin.png"  
              objectFit="cover"
              alt="Contributor 1 Xiaolin"
              borderRadius="full"
              mx="auto"
            />
            <Text mt="2" fontWeight="bold" color="black">
              Xiaolin
            </Text>
          </Box>

          {/* Contributor 2 */}
          <Box m="4" width="100%" textAlign="center">
            <Image
              src="/Loris.png"  
              objectFit="cover"
              alt="Contributor 2 Loris"
              borderRadius="full"
              mx="auto"
            />
            <Text mt="2" fontWeight="bold" color="black">
              Loris
            </Text>
          </Box>
        </Flex>

        {/* suscription */}
        <Flex direction="column" align="center">
         <InputForm />
        </Flex>

      </Box>
    </Flex>
  );
};

export default Page;
