import React from 'react';
import Card from './Card';

export default function CourseCards() {
    const course = ['UI Basic', 'Basic Maths', 'JS Crash Course', 'Figma Course'];
    return (
        <div className='course-card-container'>
            <div className='d-flex justify-space-between'>
                <span className='notification-heading'>Top rated Courses</span>
                <span className='view-all-button'>View All</span>
            </div>
            <div className='cards'>
                {course.map((title) => {
                    return <Card title={title} key={title} />;
                })}
            </div>
        </div>
    );
}
