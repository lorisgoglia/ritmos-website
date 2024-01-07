// components/FreeEvents.js
import React from 'react';
import { Box, Container, Grid, Text, Heading } from '@chakra-ui/react';




const FreeEvents = ({events}) => {
  return (
    <Box py="6">
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="8">
          {events.map((event) => (
            <Box key={event.id} bg="white" p="6" rounded="md" shadow="md">
              <img
                src={event.image}
                alt={event.alt}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <Heading as="h3" fontSize="xl" fontWeight="bold" mb="2">
                {event.name}
              </Heading>
              <Text color="gray.600">{event.time}</Text>
              <Text color="gray.600">{event.location}</Text>

          
            </Box>
          ))}
        </Grid>
     
      </Container>
    </Box>
  );
};


export default FreeEvents;
