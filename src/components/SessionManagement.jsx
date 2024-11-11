import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function SessionManager() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem('sessionId');
    if (!session) {
      const newSessionId = uuidv4();
      localStorage.setItem('sessionId', newSessionId);
      setSessionId(newSessionId);
    } else {
      setSessionId(session);
    }
  }, []);

  return (
    <div>
      <h3>Your Session ID: {sessionId}</h3>
    </div>
  );
}

export default SessionManager;
