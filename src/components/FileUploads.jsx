import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FileUploader() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const uniqueFileName = `${uuidv4()}: ${file.name}`;
    setFileName(uniqueFileName);
    console.log('File will be uploaded with name:', uniqueFileName);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p>Uploading: {fileName}</p>}
    </div>
  );
}

export default FileUploader;
