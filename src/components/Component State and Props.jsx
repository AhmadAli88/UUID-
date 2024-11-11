import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function DynamicForm() {
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: '' },
    { id: uuidv4(), value: '' },
  ]);

  const handleChange = (id, value) => {
    setInputs(
      inputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };
  console.log('inputs', inputs);

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            type='text'
            value={input.value}
            onChange={(e) => handleChange(input.id, e.target.value)}
            placeholder='Enter text'
          />
          <div>
            <p>Id is: {input.id}</p>
            <p>Value is: {input.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicForm;
