import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UniqueForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameInputId = uuidv4();
  const emailInputId = uuidv4();
console.log("nameInputId", nameInputId);
console.log("emailInputId", emailInputId);
  return (
    <form>
      <div>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{nameInputId}</p>
      </div>
      <div>
        <label htmlFor={emailInputId}>Email</label>
        <input
          id={emailInputId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{emailInputId}</p>
      </div>
    </form>
  );
}

export default UniqueForm;
