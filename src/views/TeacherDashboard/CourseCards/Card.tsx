import React from 'react';
// import imagesrc from '../../../assets/images/Rectangle 1.png';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      {/* <img src={imagesrc} alt="Card Image" className="card-image" /> */}
      <div className="card-content">
        <div className='d-flex justify-space-between align-start'>
          <span style={{ fontSize: '16px' }} className='notification-heading'>{title}</span>
          <span style={{ fontSize: '10px', fontWeight: 400, color: '#218C75' }}>723 enrolled</span>
        </div>
        <div className='d-flex justify-space-between'>
          <span style={{ color: '#818181' }} className='card-stats'>12 classes</span>
          <span style={{ color: '#218C75' }} className='card-stats'>40 lectures</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
