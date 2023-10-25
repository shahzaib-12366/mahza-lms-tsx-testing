import React, { useState } from 'react';
import Breadcrumb from './breadcrumb';
import CourseTabs from './Course-tabs';
import CoursesCount from './Courses-count';

function CreateCourse() {
    const [showTabs, setShowTabs] = useState(false);

    const handleCreateCourseClick = () => {
        setShowTabs(true);
    };

    return (
        <div className='create-course-wraper'>
            <Breadcrumb />
            {!showTabs ? (
                <CoursesCount onCreateCourseClick={handleCreateCourseClick} />
            ) : (
                <CourseTabs />
            )}
        </div>
    );
}

export default CreateCourse;
