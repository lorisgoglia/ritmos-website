import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Image */}
      <div className="relative h-64 w-full ">
        <Image
          src="/concertNight.jpg"  
          layout="fill"
          objectFit="cover"
          alt="About Us Hero Image"
        />
      </div>

      {/* Text Section */}
      <div className="container mx-auto p-8 text-black text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ritmos</h1>
        <p>
          At Ritmos, we are passionate about bringing the vibrant music scene of Madrid to your fingertips.
          &quot;Ritmos&quot; is a Spanish word that translates to &quot;Rhythms&quot; in English, and it perfectly encapsulates the heartbeat of our city&apos;s music culture.
        </p>
      </div>
    {/* Contributor Section */}
    <div className="container mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Meet Our Contributors</h2>
          <div className="flex flex-wrap justify-center">
            {/* Contributor 1 */}
            <div className="m-4">
              <Image
                src="/Loris.png"  // Replace with the actual path to the contributor's picture
                width={100}  // Set the desired width
                height={100} // Set the desired height
                objectFit="cover"
                alt="Contributor 1"
                className="rounded-full"
              />
              <p className="mt-2">Loris</p>
            </div>

            {/* Contributor 2 */}
            <div className="m-4">
              <Image
                src="/Xiaolin.png"  // Replace with the actual path to the contributor's picture
                width={100}  // Set the desired width
                height={100} // Set the desired height
                objectFit="cover"
                alt="Contributor 2"
                className="rounded-full"
              />
              <p className="mt-2">Xiaolin</p>
            </div>
            
        </div>
      </div>

    </div>
  );
}
