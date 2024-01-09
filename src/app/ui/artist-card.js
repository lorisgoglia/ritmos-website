'use client'

import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react'
import ArtistLink from './artist-link'



export default function ArtistCard({id,name,genre,img}){

    return(

      <>
          <Card
            display="flex" 
            flexDirection={{ base: 'column', sm: 'row' }} 
            alignItems="center" 
            justifyContent="space-between"
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

            <ArtistLink  artistId={id} > </ArtistLink>
          </Card>
      </>
    )
}