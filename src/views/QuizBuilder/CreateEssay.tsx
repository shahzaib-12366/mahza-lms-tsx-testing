import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateEssay: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleTextChange = (text: string) => {
    setValue(text);
  };

  return (
    <div style={{ marginTop: '32px' }} className='d-flex flex-column gap-10'>
      <h4>Essay Description:</h4>
      <ReactQuill style={{ height: '400px' }} theme="snow" value={value} onChange={handleTextChange} />
    </div>
  );
};

export default CreateEssay;
