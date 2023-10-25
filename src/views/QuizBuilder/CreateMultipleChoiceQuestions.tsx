import React, { useState } from 'react';
import CustomButton from '../../components/shared/Button';
import CustomSelect from '../../components/inputs/Select';
import { ReactComponent as CrossIcon } from '../../assets/images/cross-white.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';

interface Choice {
  text: string;
}

const CreateMultipleChoiceQuestions: React.FC = () => {
  const [choices, setChoices] = useState<Choice[]>([{ text: 'Question 1' }, { text: 'Question 2' }]);
  const [multiSelect, setMultiSelect] = useState(false);

const handleAdd = () => {
  setChoices([...choices, { text: `Question ${choices.length + 1}` }]);
};
  const removeItemAtIndex = (indexToRemove: number) => {
    setChoices((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };
  const questionOptions = [
    {
      label: 'Correct',
      value: 'correct',
    },
    {
      label: 'Incorrect',
      value: 'incorrect',
    },
  ];

  return (
    <div>
      <button onClick={() => setMultiSelect(false)} className={`select-button ${!multiSelect && 'selected-select-button'}`}>
        <h4>Single Select</h4>
      </button>
      <button onClick={() => setMultiSelect(true)} className={`select-button ${multiSelect && 'selected-select-button'}`}>
        <h4>Multi Select</h4>
      </button>
      <div style={{ marginTop: '32px' }} className="d-flex flex-column gap-10">
        {choices.map((question, index) => {
          return (
            <div key={index} className="d-flex gap-5">
              <div style={{ padding: '10px', backgroundColor: '#10BAAC', color: 'white', borderRadius: '4px' }}>
                <h3 style={{ margin: '0' }}>{index + 1}.</h3>
              </div>
              <div style={{ flexBasis: '70%', backgroundColor: '#EBEAED', padding: '11px 12px 11px 12px' }}>
                <h4 style={{ margin: '0' }}>{question.text}</h4>
              </div>
              <div style={{ flexBasis: '20%' }}>
                {/* <CustomSelect options={questionOptions} variant={"primary"}/> */}
              </div>
              <div onClick={() => removeItemAtIndex(index)} style={{ padding: '10px', backgroundColor: '#F04B61', borderRadius: '6px' }} className="d-flex align-center">
                <CrossIcon />
              </div>
            </div>
          );
        })}
        <div onClick={handleAdd} className="d-flex align-center gap-10 pointer">
          <PlusIcon /> <span style={{ fontSize: '14px', fontWeight: '500', color: '#08496D' }}>More Options</span>
        </div>
      </div>
      {/* <CustomButton
         variant="primary"
        customStyle={{ height: '44px', padding: '10px', marginTop: '32px', backgroundColor: 'rgba(16, 186, 172, 0.05)', color: '#10BAAC' }}
        className="w-100"
        childClasses="d-flex align-center justify-center gap-5"
      >
        <PlusIcon /> More MCQ's
      </CustomButton> */}
    </div>
  );
};

export default CreateMultipleChoiceQuestions;
