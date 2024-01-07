// components/EventPageTemplate.js
import React from 'react';
import { Box, Text, Image, Heading } from '@chakra-ui/react';

const EventPageTemplate = ({ event }) => {
  const { name, time, location, price, description, image } = event;

  return (
    <Box p="8">
      <Image src={image} alt={name} mb="4" />
      <Heading fontSize="3xl" fontWeight="bold" mb="4">
        {name}
      </Heading>
      <Text fontSize="lg" mb="4">
        {description}
      </Text>
      <Text fontSize="lg" mb="4">
        <strong>Time:</strong> {time}
      </Text>
      <Text fontSize="lg" mb="4">
        <strong>Location:</strong> {location}
      </Text>
      <Text fontSize="lg" mb="4">
        <strong>Price:</strong> {price}
      </Text>
    </Box>
  );
};

export default EventPageTemplate;
