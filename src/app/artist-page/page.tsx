'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { usePathname } from 'next/navigation';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import  artists from '../../data/spanish-artists.json';



export default function Page() {

    const [artistId, setArtistId] = useState('');

    useEffect(() => {
      const storedArtistId = localStorage.getItem('artistId');
      if (storedArtistId) {
        setArtistId(storedArtistId);
      }
    }, []);
    const validArtistId = artistId || '0'; 
    const artist = artists.find(artist => artist.key === validArtistId);

    if (!artist) {
      return <div>{validArtistId}</div>;
    }
    else{
    return (


<main className="relative items-center overflow-hidden">

<div className="relative w-full h-[80vh] -z-20 avl ">


  <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 z-20"></div>

  <Image
    src={artist.images[1]}
    layout="fill"
    objectFit="cover"
    alt="The artist alone"
  />
  <div className="absolute bottom-5 left-5  text-center z-30">
    <h1 className="text-8xl font-bold text-white mb-4 z-10">
        {artist.name}
    </h1>
    <h2 className="text-2xl text-white text-left mb-4 z-10">
      {artist.genre}
    </h2>
    
  </div>
  </div>

        <Tabs isFitted variant='enclosed' mt={100} ml={50} mr ={50}>
          <TabList mb='1em'>
            <Tab>Description</Tab>
            <Tab>Best Songs</Tab>
            <Tab>Latest Tour</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>{artist.biography}</p>
            </TabPanel>

            <TabPanel>
              <OrderedList>
                <ListItem>{artist.bestSongs[0]}</ListItem>
                <ListItem>{artist.bestSongs[1]}</ListItem>
                <ListItem>{artist.bestSongs[2]}</ListItem>
                <ListItem>{artist.bestSongs[3]}</ListItem>
                <ListItem>{artist.bestSongs[4]}</ListItem>
              </OrderedList>
            </TabPanel>

            <TabPanel>
            <TableContainer>
                <Table variant='simple'>
                  <TableCaption>{artist.latestTour.name}</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>City</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {artist.latestTour.dates.map((tourDate, index) => (
                      <Tr key={index}>
                        <Td>{tourDate.city}</Td>
                        <Td>{tourDate.date}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                
                </Table>
              </TableContainer>
            </TabPanel>

          </TabPanels>
        </Tabs>

        
      </main>
        
    
    );
    }
  }