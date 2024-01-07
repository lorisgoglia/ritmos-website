'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.


export default function ArtistLink(artistId) {
  const pathname = usePathname();

  return (
    <>
      
          <Link
            key={artistId}
            href='/artist-page'
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#196cac] p-3 text-sm text-white font-medium hover:bg-[#125580]  hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-[#196cac] text-white': pathname === '/artist-page',
            },
            )}
          >
            <p className="hidden md:block">See artist page</p>
          </Link>
        

      
    </>
  );
}
