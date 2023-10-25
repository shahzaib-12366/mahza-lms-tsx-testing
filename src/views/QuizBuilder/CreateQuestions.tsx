import React, { useState } from 'react';
import CustomSelect from '../../components/inputs/Select';
import CreateMultipleChoiceQuestions from './CreateMultipleChoiceQuestions';
import CreateTrueFalseQuestions from './CreateTrueFalseQuestions';
import CreateFillBlankQuestions from './CreateFillBlankQuestions';
import CreateEssay from './CreateEssay';

interface Option {
  label: string;
  value: string;
}

export default function CreateQuestions() {
  const [selectedType, setSelectedType] = useState<string[]>(['multi']);

  const options: Option[] = [
    {
      label: 'True/False',
      value: 'binary',
    },
    {
      label: 'Fill In The Blanks',
      value: 'blanks',
    },
    {
      label: 'Multiple Choice Answers',
      value: 'multi',
    },
    {
      label: 'Matching',
      value: 'match',
    },
    {
      label: 'Essay Questions',
      value: 'essay',
    },
  ];

  return (
    <div className="create-question-container">
      {/* <CustomSelect selected={selectedType} handleChange={(value) => setSelectedType(value)} options={options} /> */}

      {selectedType.includes('multi') && <CreateMultipleChoiceQuestions />}
      {selectedType.includes('binary') && <CreateTrueFalseQuestions />}
      {selectedType.includes('blanks') && <CreateFillBlankQuestions />}
      {selectedType.includes('match') && <div>Match</div>}
      {selectedType.includes('essay') && <CreateEssay />}
    </div>
  );
}
