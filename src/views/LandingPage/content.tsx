import React from 'react';
import Sidebar from './fixed-sidebar';
import { ReactComponent as Star } from '../../assets/images/Vector.svg';
import { HeartOutlined, CheckCircleFilled } from '@ant-design/icons';
import { ReactComponent as Graystar } from '../../assets/images/gray-vector.svg';
import { ReactComponent as Review } from '../../assets/images/blogging 1.svg';
import { ReactComponent as User } from '../../assets/images/reader 1.svg';
import { ReactComponent as PlayerBtn } from '../../assets/images/player_btn.svg';
import { ReactComponent as GrayRating } from '../../assets/images/GrayStar.svg';
import { ReactComponent as YellowRating } from '../../assets/images/yellowStar.svg';
import { ReactComponent as Bullet } from '../../assets/images/Ellipse 6.svg';
import { ReactComponent as Activebullet } from '../../assets/images/Rectangle 12.svg';
import ProgressBar from '../../components/shared/ProgressBar';
import Button from '../../components/shared/Button';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Content = () => {
  return (
    <div className="content">
      <div className="breadcrumbs">
        Home / Courses List / Course Single
      </div>
      <Sidebar />
      <div className="course-inset">
        <div className="course-title">
          <div className="title-header">
            <h2 className='title-text'>Learn Figma: User Interface Design Essentials - UI/UX Design</h2>
            <span className="save-favorite-icon">
              <HeartOutlined style={{ width: '16px', height: '16px', color: 'white', backgroundColor: '#949da6', padding: '10px', borderRadius: '50%' }} />
            </span>
          </div>
          <p className='course-description'>Master Figma app to get a job in UI Design, User Interface, User Experience design, Web Design & UX design.</p>

          <div className="course-details">
            <div className="course-image">
              <div className="eclipseIcon"></div>
            </div>
            <div className="course-info">
              <div className="course-info-details">
                <p>Created by</p>
                <span>John doe</span>
              </div>
              <div className="course-info-details">
                <p>Created by</p>
                <span>John doe</span>
              </div>
              <div className="course-info-details">
                <p>Created by</p>
                <span>
                  <Star style={{ marginRight: '3px' }} />
                  <Star style={{ marginRight: '3px' }} />
                  <Star style={{ marginRight: '3px' }} />
                  <Star style={{ marginRight: '3px' }} />
                  <Star style={{ marginRight: '3px' }} />
                  4.87 (3.8k+ reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs >
          <TabPane tab="Overview" key="overview">
            <div className="overview-tab-content">
              <div className="course-description">
                <h3>Course Description</h3>
                <p>
                  Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.<br /><br />
                  Hi everyone.I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc.
                </p>
                <div className="read-more">
                  <span>Read More</span>
                  <span className='icon'>+</span>
                </div>
                <div className="Learn-section">
                  <h3>What You'll Learn</h3>
                  <div className="learn-items">
                    <div className="learn-items-left">
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Become a UI/UX designer.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        You will be able to start earning Figma skills.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Build a UI project from beginning to end.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Work with colors & fonts.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        You will create your own UI Kit.
                      </div>
                    </div>
                    <div className="learn-items-right">
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Build & test a complete mobile app.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Learn to design mobile apps.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Design 3 different logos.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Design a landing page.
                      </div>
                      <div className="learn-item">
                        <CheckCircleFilled style={{ fontSize: '16px', marginRight: '10px', color: '#10baac' }} />
                        Learn to design User interface (UI) of a web application.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Faq-section">
                  <h3>Frequently Asked Questions</h3>
                  <div className="faq-items">
                    <div className="faq-item">
                      <Graystar style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                      <span>Is it possible to create an exact copy of a UI kit designed in Figma in the web development phase?</span>
                    </div>
                    <div className="faq-item">
                      <Graystar style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                      <span>What are the most up-to-date web development languages in the world?</span>
                    </div>
                    <div className="faq-item">
                      <Graystar style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                      <span>How many logos can I create in this course?</span>
                    </div>
                    <div className="faq-item">
                      <Graystar style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                      <span>Does the software taught in this course have restrictions?</span>
                    </div>
                    <div className="faq-item">
                      <Graystar style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                      <span>What is a landing page and what are the best practices?</span>
                    </div>
                  </div>
                </div>
                <div className="instructors">
                  <h3>Meet Your Instructors</h3>
                  <div className="instructor-card">
                    <div className="instructor-image">
                      <img src="instructor-image.jpg" alt="Instructor" />
                    </div>
                    <div className="instructor-details">
                      <h4>John Doe</h4>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <div className="instructor-card">
                    <div className="instructor-image">
                      <img src="instructor-image.jpg" alt="Instructor" />
                    </div>
                    <div className="instructor-details">
                      <h4>Jane Smith</h4>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="reviews">
                  <h3>Student Reviews</h3>
                  <div className="review-card">
                    <div className="reviewer-image">
                      <img src="reviewer-image.jpg" alt="Reviewer" />
                    </div>
                    <div className="reviewer-details">
                      <div className="name-rating">
                        <h4>Oscar Cafeo</h4>
                        <span>
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          5.0 (14 reviews)
                        </span>
                      </div>
                      <div className="review-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus turpis in orci
                          facilisis, ut mattis justo ullamcorper. Nullam quis blandit urna. Nullam non ligula nec odio
                          gravida auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="review-card">
                    <div className="reviewer-image">
                      <img src="reviewer-image.jpg" alt="Reviewer" />
                    </div>
                    <div className="reviewer-details">
                      <div className="name-rating">
                        <h4>Emily Johnson</h4>
                        <span>
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          <YellowRating style={{ marginRight: '3px' }} />
                          5.0 (18 reviews)
                        </span>
                      </div>
                      <div className="review-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus turpis in orci
                          facilisis, ut mattis justo ullamcorper. Nullam quis blandit urna. Nullam non ligula nec odio
                          gravida auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Curriculum" key="curriculum">
            <div className="curriculum-tab-content">
              <h3>Course Curriculum</h3>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Activebullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Course Introduction</span>
              </div>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Bullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Setting Up Figma</span>
              </div>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Bullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Exploring the Figma Interface</span>
              </div>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Bullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Designing a Landing Page</span>
              </div>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Bullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Working with Styles in Figma</span>
              </div>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Bullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Creating Interactive Prototypes</span>
              </div>
              <div className="curriculum-item">
                <div className="bullet-icon">
                  <Bullet style={{ width: '16px', height: '16px' }} />
                </div>
                <span>Collaborating with Others in Figma</span>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Content;
