import Image from 'next/image'
import React from 'react';
import BestArtists from '../ui/best-artist'

export default function Page() {
    return (
      <main className="relative items-center overflow-hidden">

      <div className="relative w-full h-[80vh] -z-20 avl ">


        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 z-20"></div>

        <Image
          src="/bandOnStage.jpg"
          layout="fill"
          objectFit="cover"
          alt="A musical band of 4 people on a stage in front of a crowd."
          className='filter brightness-60'
        />
        <div className="absolute bottom-5 left-5  text-center z-30">
          <h1 className="text-8xl font-bold text-white mb-4 z-10">
              Artists
          </h1>
          
        </div>
        </div>

        <BestArtists></BestArtists>

        
      </main>
        
    
    );
  }