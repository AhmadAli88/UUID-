import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EventTracker() {
    const [eventId, setEventId]= useState()
  const trackEvent = () => {
    const eventId = uuidv4();
    console.log(`Event tracked with ID: ${eventId}`);
    setEventId(eventId)
  };

  return (
    <div>
      <button onClick={trackEvent}>Track Event</button>
      <h4>{eventId}</h4>
    </div>
  );
}

export default EventTracker;
