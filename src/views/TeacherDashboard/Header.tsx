import React from 'react';
import '../../assets/styles/views/TeacherDashboard/Header.scss';
import Logo from '../../assets/images/A B Z-2 1.svg';
// import Profile from '../../assets/images/videobg.png';
import { SearchOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
    return (
        <div className="teacher-header">
            <div className="header-left">
                <div className="logo-container">
                    {/* <img src={Logo} alt="" /> */}
                    <span className='logo-headline'>Teacher</span>
                </div>
                <div className="search-bar">
                    <input className='header-search-bar' type="text" placeholder="Search here" />
                    <SearchOutlined className='search-icon' />
                </div>
            </div>
            <div className="header-right">
                <div className="msgs-notification-bar">
                    <MessageOutlined className='notifi-icon' />
                    <span className='notifi-value'>10</span>
                </div>
                <div className="settings-notifications">
                    <SettingOutlined className='notifi-icon' />
                    <span className='notifi-value'>13</span>
                </div>
                <div className="header-vertical-bar">
                    <span>|</span>
                </div>
                <div className="user-profile">
                    <span className='profile-name'>Hello Nouman</span>
                    {/* <img src={Profile} alt="User Avatar" className='profile-img' /> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
