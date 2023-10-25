import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import NotificationPanel from './Notifications/NotificationsPanel';
import CourseCards from './CourseCards/CourseCards';
import ContentSection from './Content/content';
import CreateCourse from './Create-course/create-course';

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <div className='d-flex'>
                <div className='teacher-dashboard-sidebar'>
                    <Sidebar />
                </div>
                <div className='teacher-dashboard-content'>
                    {/* <ContentSection /> */}
                    {/* <CourseCards /> */}
                    <CreateCourse/>
                </div>
                {/* <div className='teacher-dashboard-notifications'>
                    <NotificationPanel />
                </div> */}
            </div>
        </div>
    );
}

export default Dashboard;
