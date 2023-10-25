
import React, { useState } from 'react';
import CreateQuestions from './CreateQuestions';
import CustomButton from '../../components/shared/Button';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';

export default function Questions() {
    const [questions, setQuestions] = useState<any[]>([]);

    const addQuestion = () => {
        setQuestions([...questions, {}]);
    }

    return (
        <div>
            <h3>Create Quiz</h3>
            <div className='d-flex flex-column gap-10'>
                {questions.map((question, index) => {
                    return <CreateQuestions key={index} />;
                })}
            </div>
            {/* <CustomButton
                onClick={addQuestion}
                customStyle={{ height: '44px', padding: '10px', marginTop: '32px', backgroundColor: '#10BAAC', color: 'white' }}
                className='w-100'
                childClasses={'d-flex align-center justify-center gap-5'}
            >
                <PlusIcon />  Add Other type of question
            </CustomButton> */}
            <div style={{ marginTop: '32px' }} className='d-flex justify-end gap-10'>
                <button style={{ backgroundColor: 'white' }} className='reset-button'>Cancel</button>
                <button className='draft-btn'>Save As draft</button>
                <button className='save-btn'>Save & Publish</button>
            </div>
        </div>
    );
}
