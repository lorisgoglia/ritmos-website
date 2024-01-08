'use client';
import { Flex, Button, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import UpcomingEvents from '../components/upcomingEvents';
import FreeEvents from '../components/freeEvents';
import InputForm from '../components/inputForm';
import eventsData from './events/eventData'; 
import NextLink from 'next/link';

export default function Home() {
  const upcomingEvents = eventsData.filter(event => event.price !== 'free');
  const freeEvents = eventsData.filter(event => event.price === 'free');


  return (
    <main className="relative items-center">
      <Flex
        className="relative w-full h-[80vh] z-40 avl"
        position="relative"
        align="center"
        justify="center"
        overflow="hidden"
      >
        {/* Hero Images */}
      <Flex
        className="absolute inset-0 bg-black opacity-40 z-20"
        position="absolute"
        inset="0"
        align="center"
        justify="center"
        
      ></Flex>
        <Image
          src="/hero-home.jpg"
          layout="fill"
          objectFit="cover"
          alt="A group of people at a music event held up their phones to take photo of the colorful lights and falling confetti."
          role="img"
        
        />
        <Flex
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40"
          position="absolute"
          bottom="0"
          left="50%"
          transform="translate(-50%, -50%)"
          align="center"
          justify="center"
          direction="column"
        >
          <Heading className="text-4xl font-bold text-white mb-4 z-40">
            Discover the best Music events in your area and online
          </Heading>
          <NextLink href={`/events`} passHref>
          <Button
              as="a"
              bgColor="#196cac"
              color="white"
              mt="4"
              cursor="pointer"
              _hover={{ bgColor: '#125580' }}
              role="link"
              aria-label="Find events in the events page"
             >
            Find events
          </Button>
          </NextLink>
        </Flex>
      </Flex>
      <Flex className="pt-20" direction="column" align="center">
        {/* Upcoming Events Section */}
        <Flex className="mb-10 px-24" direction="column" align="center">
          <Heading className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</Heading>
          <UpcomingEvents events={upcomingEvents}/>
        </Flex>
        {/* Free Events Section */}
        <Flex className="mb-10 px-24" direction="column" align="center">
          <Heading className="text-3xl font-bold text-gray-800 mb-6">Free Events</Heading>
          <FreeEvents  events={freeEvents}/>
        </Flex>
      </Flex>

       {/* suscription */}
       <Flex direction="column" align="center">
         <InputForm />
        </Flex>
    </main>
    

    
  );
}
