import React, { useState } from 'react';
import { ReactComponent as ViewIcon } from '../../assets/images/open-modal.svg';
import ModalWrapper from '../../Modal/ModalWraper';
import Input from '../../components/inputs/Input';

interface FillBlankGeneratorProps {}

export default function FillBlankGenerator({}: FillBlankGeneratorProps) {
  const [statement, setStatement] = useState<string>('');
  const [showBlanks, setShowBlanks] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleSelectToken = (index: number) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((item) => item !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  return (
    <div className='d-flex flex-column gap-10'>
      <ModalWrapper
         title="Your Modal Title"
         visible={openModal}
         onCancel={() => setOpenModal(false)}
         onOk={() => {} /* Your onOk handler */}
         size="large"// Adjust the size according to your requirements
      >
        <div className='d-flex flex-column gap-10'>
          <div className='d-flex gap-5 align-end'>
            {statement &&
              statement.split(' ').map((word, index) => {
                return selectedIndexes.includes(index) ? (
                  <Input customStyles={{ width: '100px', background: '#F7F7F7' }} />
                ) : (
                  <span className='token-text'>{word}</span>
                );
              })}
          </div>
        </div>
      </ModalWrapper>
      Sentence:
      <Input
        onChange={(e) => {
          setStatement(e.target.value);
        }}
        customStyles={{ height: '88px' }}
      />
      <button
        onClick={() => {
          statement && setShowBlanks(true);
        }}
        style={{ margin: '0px', width: '286px' }}
        className={`select-button selected-select-button`}
      >
        <h4>Generate Fill In The Blank Chunks</h4>
      </button>
      {showBlanks && (
        <div className='select-blanks-container'>
          <div className='d-flex align-center gap-10'>
            <h4>Click to Add Blanks in this statement</h4>
            <div className='d-flex'>
              {statement &&
                statement.split(' ').map((word, index) => {
                  return (
                    <span
                      onClick={() => {
                        handleSelectToken(index);
                      }}
                      className={`token token-text text-center ${selectedIndexes.includes(index) && 'selected-token'}`}
                    >
                      {word}
                    </span>
                  );
                })}
            </div>
            <div className='d-flex justify-end'>
              <ViewIcon onClick={() => setOpenModal(true)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
