// components/upcomingEvents.js
import React from 'react';

const UpcomingEvents = ({ allEventsLink }) => {
    const events = [
        {
          id: 1,
          name: 'Concert Night',
          time: '7:00 PM - 10:00 PM',
          location: 'City Hall Auditorium',
          image: '/concertNight.jpg', // Replace 
        },
        {
          id: 2,
          name: 'Festival Weekend',
          time: '12:00 PM - 6:00 PM',
          location: 'Park Square',
          image: '/festivalWeekend.jpg', // Replace 
        },
        {
          id: 3,
          name: 'Live Band Performance',
          time: '8:00 PM - 11:00 PM',
          location: 'Downtown Arena',
          image: '/liveBandPerformance.jpg', // Replace 
        },
      ];
    
      return (
        <section className="py-6}">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-md shadow-md">
                  <img src={event.image} alt={event.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                  <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-600">{event.time}</p>
                  <p className="text-gray-600">{event.location}</p>
                  <p className="text-blue-500 mt-4 cursor-pointer">Learn more</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
          <a href={allEventsLink} className="text-blue-500 hover:underline">
            See All Upcoming Events
          </a>
        </div>
          </div>
        </section>
      );
    };
    
    export default UpcomingEvents;