'use client'

import ArtistCard from './artist-card'
import { Stack } from "@chakra-ui/react";
import artists from '../../data/spanish-artists.json';


  
  export default function BestArtists() {
    return (
        <>
        <h2 className='text-4xl font-bold text-black m-20 z-10 ' >Best of the moment:</h2>
        <Stack spacing='4' m={20} w='50%'>

            {artists.map(artist => (
                <ArtistCard id={artist.key} key={artist.key} name={artist.name} genre={artist.genre} img={artist.images[0]}/>
            ))}
        </Stack>
        </>
    );
  }