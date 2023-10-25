import React from 'react';
// import Button, { CustomButtonProps } from '../../../components/shared/Button';
import { PoweroffOutlined } from '@ant-design/icons';
// import Revenue from '../../../assets/images/Net Revenue.png';

const Content: React.FC = () => {
  return (
    <div className="teacher-dashboard-content-wraper">
      <div className="welcome-bar-wraper">
        <div className="welcome-section">
          <span className='name-text'>Hi Nouman</span>
          <h2 className='welcome-msg'>Welcome back 👋</h2>
        </div>
        <div className="add-course-event-section">
          {/* <Button variant="primary" className='add-btns'> <span className='icon'>+</span>Add Course</Button>
          <Button variant="default" className='add-btns'> <span className='icon'>+</span>Add Event</Button> */}
        </div>
      </div>
      <div className="detail-cards">
        <div className="card-item-wraper">
          <div className="card-item">
            <span className='icon'> <PoweroffOutlined style={{ fontSize: '32px' }} /> </span>
            <div className="text-wraper">
              <h2 className='value'>16</h2>
              <p className='text-content'>No of courses</p>
            </div>
          </div>
          <div className="card-item">
            <span className='icon'> <PoweroffOutlined style={{ fontSize: '32px' }} /> </span>
            <div className="text-wraper">
              <h2 className='value'>16</h2>
              <p className='text-content'>No of courses</p>
            </div>
          </div>
        </div>
        <div className="card-item-wraper">
          <div className="card-item">
            <span className='icon'> <PoweroffOutlined style={{ fontSize: '32px' }} /> </span>
            <div className="text-wraper">
              <h2 className='value'>16</h2>
              <p className='text-content'>No of courses</p>
            </div>
          </div>
          <div className="card-item">
            <span className='icon'> <PoweroffOutlined style={{ fontSize: '32px' }} /> </span>
            <div className="text-wraper">
              <h2 className='value'>16</h2>
              <p className='text-content'>No of courses</p>
            </div>
          </div>
        </div>
      </div>
      <div className="revenue-charts">
        {/* <img src={Revenue} alt="Net Revenue" /> */}
      </div>
    </div>
  );
};

export default Content;
