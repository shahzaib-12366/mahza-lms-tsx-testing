import React from 'react';
// import LogoImg from '../../assets/images/A B Z-2 1.svg';
// import profileImg from '../../assets/images/Rectangle 1.png';

const Header: React.FC = () => {
    return (
        <header className="main-header">
            <div className="header-logo">
                <img src="" alt="Logo" />
            </div>
            <div className="header-right-side">
                <div className="header-search">
                    <input type="text" placeholder="Search..." />
                    {/* <span className="search-icon">&#128269;</span> */}
                </div>
                <div className="header-icons">
                    <span className="notification-icon">&#x1F514;</span>
                    <div className="user-profile">
                        <img src="" alt="User Profile" />
                        <span className="add-icon">+</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
