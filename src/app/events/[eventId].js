// pages/events/[eventId].js

import EventPageTemplate from '../components/EventPageTemplate';
import eventsData from '../app/events/eventData';


export async function getServerSideProps({ params }) {
    const eventId = params.eventId;
    const event = eventsData.find(event => event.id.toString() === params.eventId);
    
    console.log('Requested Event ID:', eventId);

    if (!event) {
        // Handle the case where the event doesn't exist
        console.log('Event not found for ID:', eventId);
        return { notFound: true };
      }
      console.log('Found Event:', event);
      return { props: { event } };
    }

    const EventPage = ({ event }) => {
        // Use the event prop directly
        return <EventPageTemplate event={event} />;
      };
      
      export default EventPage;