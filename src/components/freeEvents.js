// components/FreeEvents.js
import React from 'react';

const FreeEvents = ({ allEventsLink }) => {
  const events = [
    {
      id: 4,
      name: 'Free Concert in the Park',
      time: '2:00 PM - 5:00 PM',
      location: 'Central Park',
      image: '/freeConcertInPark.jpg', 
    },
    {
      id: 5,
      name: 'Karaoke Night',
      time: '7:00 PM - 10:00 PM',
      location: 'Local Community Center',
      image: '/karaokeNight.jpg', 
    },
    {
      id: 6,
      name: 'Music Workshop: Jazz',
      time: '10:00 AM - 1:00 PM',
      location: 'City Music School',
      image: '/musicWorkshop.jpg',
    },

  ];

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-md shadow-md">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{event.name}</h3>
              <p className="text-gray-600">{event.time}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-blue-500 mt-4 cursor-pointer">Learn more</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href={allEventsLink} className="text-blue-500 hover:underline">
            See All Free Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeEvents;
