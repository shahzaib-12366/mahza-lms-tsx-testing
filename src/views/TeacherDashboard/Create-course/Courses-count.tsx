import React from 'react';
import Button from '../../../components/shared/Button';
import BookIcon from '../../../assets/images/course.svg';

interface CoursesCountProps {
  onCreateCourseClick: () => void;
}

const CoursesCount: React.FC<CoursesCountProps> = ({ onCreateCourseClick }) => {
  return (
    <div className="course-detail">
      {/* <img src={BookIcon} alt="" /> */}
      <div className="no-of-courses">
        <h2>No Course Created Yet</h2>
        <p>Write something here that’ll make your reader excited! You can write anything in here. Get started.</p>
      </div>
      {/* <Button onClick={onCreateCourseClick}><span className='btn-icon'>+</span>Create New Course</Button> */}
    </div>
  );
}

export default CoursesCount;
