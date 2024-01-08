import { Text } from '@chakra-ui/react';
import freeEvents from '../../data/madrid-events.gratis.json'
import { Card, Stack, CardBody, Image, Heading } from '@chakra-ui/react'


export default function EventsFree(){
    return(
    <section className="py-6">

          

          {freeEvents.map((event) => (
              <Card
                key={event.key} 
                display="flex" // Imposta la Card come un flex container
                flexDirection={{ base: 'column', sm: 'row' }} // Imposta la direzione del flex
                justifyContent="space-between" // Spazia i componenti
                alignItems="center" // Allinea verticalmente i componenti
                overflow='hidden'
                variant='outline'
                pr='16px'
              >
              
          
                <Stack className='!flex-row'>
                  <CardBody>
                    <Heading size='md' lang={event.lang}>{event.name}</Heading>
                    <Text py='2'>{event.genre}</Text>
                  </CardBody>
                </Stack>

                <Text>{event.city}</Text>
                <Text>{event.date}</Text>
                <Text>{event.hours}</Text>


          

              </Card>
            ))}
        
        
      
    </section>
  );
  
}