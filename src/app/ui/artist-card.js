'use client'

import { Card, CardBody, Heading, Stack, Text, Button, Image } from '@chakra-ui/react'
import ArtistLink from './artist-link'



export default function ArtistCard({key,name,genre,img}){

    return(

      <>
          <Card
            display="flex" // Imposta la Card come un flex container
            flexDirection={{ base: 'column', sm: 'row' }} // Imposta la direzione del flex
            alignItems="center" // Allinea verticalmente i componenti
            overflow='hidden'
            variant='outline'
            pr='16px'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '100px' }}
              src={img}
              alt= {name} />

            <Stack className='!flex-row' flexFlow={1}>
              <CardBody>
                <Heading size='md'>{name}</Heading>

                <Text py='2'>
                  {genre}
                </Text>
              </CardBody>

            </Stack>

            <ArtistLink minH={24} minW={24} artistId={key} ml={40}>

            </ArtistLink>
            

             
          </Card>
      
          
      
      </>
    )
}