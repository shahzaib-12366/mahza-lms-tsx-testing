import React from 'react';
import { PlayCircleOutlined, WarningOutlined, ClockCircleOutlined, ShareAltOutlined, BookOutlined } from '@ant-design/icons';
import Button from '../../components/shared/Button';
// import CourseImg from '../../assets/images/videobg.png';
import { ReactComponent as User } from '../../assets/images/reader 1.svg';

const FixedSidebar: React.FC = () => {
    return (
        <div className="fixed-sidebar">
            <div className="features-and-price">
                <div className="video-placeholder">
                    <div className="video-icon">
                        <PlayCircleOutlined style={{ fontSize: '22px' }} />
                    </div>
                </div>
                <div className="pricing-details">
                    <div className="price">
                        <div className="price-wraper">
                            <span className="original-price">$67.98</span>
                            <span className="discounted-price">$10.00</span>
                            <button className="discount-button">10% off</button>
                        </div>
                    </div>
                    <div className="time-left">
                        <WarningOutlined style={{ fontSize: '16px', color: '#E63946' }} />
                        <span>2 days left in this price</span>
                    </div>
                </div>
                <div className="buttons">
                    {/* <Button variant="primary" className="custom-btn-buy"> BUY NOW</Button>
                    <Button variant="primary" className="custom-btn-enroll"> ENROLL</Button> */}
                </div>
                <div className="course-details-wrapper">
                    <div className="course-detail">
                        <div className="detail-icon">
                            <ClockCircleOutlined style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Duration</span>
                        </div>
                        <span className="detail-value">43 Weeks</span>
                    </div>
                    <div className="course-detail">
                        <div className="detail-icon">
                            <BookOutlined style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Lectures</span>
                        </div>
                        <span className="detail-value">32</span>
                    </div>
                    <div className="course-detail">
                        <div className="detail-icon">
                            <User style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Enrolled</span>
                        </div>
                        <span className="detail-value">1982 Students</span>
                    </div>
                    <div className="course-detail">
                        <div className="detail-icon">
                            <ClockCircleOutlined style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Language</span>
                        </div>
                        <span className="detail-value">English</span>
                    </div>
                    <div className="course-detail">
                        <div className="detail-icon">
                            <ClockCircleOutlined style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Skill Level</span>
                        </div>
                        <span className="detail-value">Beginner</span>
                    </div>
                    <div className="course-detail">
                        <div className="detail-icon">
                            <ClockCircleOutlined style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Deadline</span>
                        </div>
                        <span className="detail-value">06 April 2020</span>
                    </div>
                    <div className="course-detail">
                        <div className="detail-icon">
                            <ClockCircleOutlined style={{ fontSize: '16px', color: '#77838F', width: '16px', height: '16px' }} />
                            <span className="detail-text">Certificate</span>
                        </div>
                        <span className="detail-value">Yes</span>
                    </div>
                    <div className="course-share">
                        <a href="">
                            <ShareAltOutlined style={{ fontSize: '35px', color: '#10baac', width: '16px', height: '16px' }} />
                            <span className="share-text">Share this Course</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="latest-courses">
                <div className="courses-wrapper">
                    <h2>Latest Courses</h2>
                    <div className="course-item">
                        <div className="course-image">
                            {/* <img src={CourseImg} alt="Course" /> */}
                        </div>
                        <div className="course-details">
                            <div className="course-title">
                                Web Development and Design
                            </div>
                            <div className="course-prices">
                                <span className="cutoff-price">
                                    $959
                                </span>
                                <span className="active-price">
                                    $415.99
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="course-image">
                            {/* <img src={CourseImg} alt="Course" /> */}
                        </div>
                        <div className="course-details">
                            <div className="course-title">
                                The Complete Cyber Security Course: Hackers
                            </div>
                            <div className="course-prices">
                                <span className="cutoff-price">
                                    $959
                                </span>
                                <span className="active-price">
                                    $415.99
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="course-image">
                            {/* <img src={CourseImg} alt="Course" /> */}
                        </div>
                        <div className="course-details">
                            <div className="course-title">
                                Fashion Photography From Professional
                            </div>
                            <div className="course-prices">
                                <span className="cutoff-price">
                                    $959
                                </span>
                                <span className="active-price">
                                    $415.99
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="course-image">
                            {/* <img src={CourseImg} alt="Course" /> */}
                        </div>
                        <div className="course-details">
                            <div className="course-title">
                                The Complete Financial Analyst Course 2020
                            </div>
                            <div className="course-prices">
                                <span className="cutoff-price">
                                    $959
                                </span>
                                <span className="active-price">
                                    $415.99
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedSidebar;
