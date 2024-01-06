'use client'

import Image from 'next/image'
import UpcomingEvents from '../components/upcomingEvents'
import FreeEvents from '../components/freeEvents'

export default function Home() {
  const allUpcomingEventsLink = '/events'; // Replace with your actual link
  const allFreeEventsLink = '/events'; 
  return (
    <><main className="relative items-center overflow-hidden">

      <div className="relative w-full h-[80vh] -z-20 avl ">

        {/* Hero Images */}
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 z-20"></div>
        <Image
          src="/hero-home.jpg"
          layout="fill"
          objectFit="cover"
          alt="A group of people having fun in a music event." />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
          <h1 className="text-4xl font-bold text-white mb-4 z-10">
            Discover the best Music events in your area and online
          </h1>
          <button className='px-6 py-3 text-white bg-blue-500 border-none rounded-md cursor-pointer z-10'>
            Find events
          </button>
        </div>

      </div>
      <div className='pt-20'>
        {/* Upcoming Events Section */}
        <div className='mb-10 px-24'>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <UpcomingEvents allEventsLink={allUpcomingEventsLink} />

        </div>
        {/* Free Events Section */}
        <div className='mb-10 px-24'>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Free Events</h2>
          <FreeEvents allEventsLink={allFreeEventsLink} />
        </div>
      </div>



    </main>
    
    </>
  )
}
