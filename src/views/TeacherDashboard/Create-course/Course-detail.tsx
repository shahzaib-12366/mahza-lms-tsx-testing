import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Button from '../../../components/shared/Button';
import 'react-quill/dist/quill.snow.css';

interface CourseDetailsProps {
    onsaveclick: (data: { title: string; description: string }) => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ onsaveclick }) => {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseTitle(e.target.value);
    };

    const handleDescriptionChange = (value: string) => {
        setCourseDescription(value);
    };

    const handleSave = () => {
        // Package the data and send it back to the parent component
        const data = {
            title: courseTitle,
            description: courseDescription,
        };
        onsaveclick(data);
    };

    return (
        <div className="course-details-wrapper">
            <h2 className='title'>Creating Section</h2>
            <div className="input-details">
                <div className='simple-input'>
                    <label className='title'>Title:</label><br />
                    <input type="text" placeholder='Text' value={courseTitle} onChange={handleTitleChange} />
                </div>
                <div className='simple-input'>
                    <label className='title'>Thumbnail</label> <br />
                    <input type="file" accept=".png" />
                </div>
                <div className='textarea-wraper'>
                    <label className='textarea-title'>Description:</label>
                    <div style={{ height: 'auto' }} className="custom-quill">
                        <ReactQuill
                            theme="snow"
                            value={courseDescription}
                            onChange={handleDescriptionChange}
                            style={{ border: 'none', width: '100%', background: 'none' }}
                        />
                    </div>
                </div>
            </div>
            <div className='btns'>
                {/* <Button className='cancel-btn'>Cancel</Button>
                <Button className='save-btn' onClick={handleSave}>Save</Button> */}
            </div>
        </div>
    );
}

export default CourseDetails;
