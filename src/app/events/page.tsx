import Image from 'next/image'
import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import EventsFree from '../ui/free-events.jsx';
import EventsUpcoming from '../ui/upcoming-events.jsx'


export default function Page() {
    return (
      <main className="relative items-center overflow-hidden">

      <div className="relative w-full h-[80vh] -z-20 avl ">


        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 z-20"></div>

        <Image
          src="/crowd.jpg"
          layout="fill"
          objectFit="cover"
          alt="A crowd attending a musical event"
        />
        <div className="absolute bottom-5 left-5  text-center z-30">
          <h1 className="text-8xl font-bold text-white mb-4 z-10">
              Events
          </h1>
          
        </div>
        </div>

        <Accordion allowToggle  m={20} w='75x%'>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'grey', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'>
                  Free Events
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <EventsFree />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'grey', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'>
                  Upcoming Events
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <EventsUpcoming/>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>


        
      </main>
        
    
    );
  }