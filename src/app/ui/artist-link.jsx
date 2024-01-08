'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Flex, Text } from '@chakra-ui/react';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.


export default function ArtistLink(artistId) {
  const pathname = usePathname();

  const id = artistId.toString();

  const handleClick = () => {
    localStorage.setItem('artistId', '1');
  }

  return (
    <>
      
          <Link
            aria-label="See artist page"
            key={artistId}
            href='/artist-page'
            passHref
            onClick={handleClick}

            >
              <Flex
               as="a"
               className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#196cac] p-3 text-white font-medium hover:bg-[#125580]  hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-[#196cac] text-white': pathname === '/artist-page',
            },
            )}
            minW={{ base: 'auto', md: '150px' }} 
            >
          
            <Text fontSize={{ base: 'sm', md: 'md' }}>See artist page</Text>
            </Flex>
          </Link>
        

      
    </>
  );
}
