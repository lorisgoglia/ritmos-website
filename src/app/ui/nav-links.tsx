'use client';



import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Events', href: '/events' },
  { name: 'Artists', href: '/artists',},
  { name: 'About Us', href: '/aboutus' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          
          <Link
            aria-label={link.name}
            key={link.name}
            href={link.href}
            aria-current={pathname === link.href ? 'page' : undefined}
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 border border-blue-500 border-2 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
            )}
          >
            <span>{link.name}</span>
          </Link>
          
        );
      })}

      
    </>
  );
}
