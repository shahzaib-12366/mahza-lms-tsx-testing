import React, { useState } from 'react';
import CustomButton from '../../components/shared/Button';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import TrueFalse from './TrueFalse';

interface Question {
  text: string;
}

export default function CreateTrueFalseQuestions() {
  const [questions, setQuestions] = useState<Question[]>([{ text: '' }]);

  const handleAdd = () => {
    setQuestions((prevQuestions) => [...prevQuestions, { text: `Question ${prevQuestions.length + 1}` }]);
  };

  const removeItemAtIndex = (indexToRemove: number) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div style={{ marginTop: '32px' }} className='d-flex flex-column gap-10'>
        {questions.map((question, index) => {
          return <TrueFalse key={index} />;
        })}
      </div>
      {/* <CustomButton
        onClick={handleAdd}
        customStyle={{ height: '44px', padding: '10px', marginTop: '32px', backgroundColor: 'rgba(16, 186, 172, 0.05)', color: '#10BAAC' }}
        className='w-100'
        childClasses='d-flex align-center justify-center gap-5'
      >
        <PlusIcon /> More True/False
      </CustomButton> */}
    </div>
  );
}
