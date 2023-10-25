import React from 'react';
import CustomButton from '../../components/shared/Button';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import { ReactComponent as QuizIcon } from '../../assets/images/quiz.svg';
import { Link } from 'react-router-dom';

export default function Quizes() {
    return (
        <div className='quizes-container'>
            <div className='d-flex justify-space-between align-center'>
                <h1>Create A Quiz</h1>
                <Link to='/create-quiz'>
                    {/* <CustomButton
                        customStyle={{ padding: "10px", width: '128px', height: '44px' }}
                        childClasses={'d-flex justify-space-between align-center'}
                        variant={'success'}
                        // Add an onClick handler or other necessary properties here
                    >
                        <PlusIcon /> Create Quiz
                    </CustomButton> */}
                </Link>
            </div>
            <div style={{ marginTop: '100px' }} className='d-flex justify-center' >
                <div className='quiz-hero-section'>
                    <div className='d-flex justify-center'>
                        <QuizIcon />
                    </div>
                    <div className='text-center' style={{ padding: '32px 60px' }}>
                        <h2>No Quiz Created Yet</h2>
                        <span className='p1 light-text'>
                            Write something here that’ll make your reader excited! You can write anything in here. Get started.
                        </span>
                    </div>
                    <Link to='/create-quiz'>
                        {/* <CustomButton
                            className='w-100'
                            childClasses={'d-flex align-center justify-center gap-5'}
                            // Add variant, customStyle, and onClick handler as needed
                        >
                            <PlusIcon /> Create Quiz
                        </CustomButton> */}
                    </Link>
                </div>
            </div>
        </div>
    );
}
