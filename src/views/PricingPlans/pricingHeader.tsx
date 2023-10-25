import React, { useState } from 'react';
import Logo from '../../assets/images/A B Z-2 1.svg';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const PricingHeader: React.FC = () => {
  const [showCourseList, setShowCourseList] = useState(false);

  const toggleCourseList = () => {
    setShowCourseList(!showCourseList);
  };

  const coursesMenu = (
    <Menu>
      <Menu.Item key="1">Course 1</Menu.Item>
      <Menu.Item key="2">Course 2</Menu.Item>
      <Menu.Item key="3">Course 3</Menu.Item>
    </Menu>
  );

  return (
    <div className="pricing-header">
      <div className="logo-and-name">
        {/* <img src={Logo} alt="Logo" /> */}
        <h3>Abiz Solutions</h3>
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li onClick={toggleCourseList} className="menu-link">
            <Dropdown overlay={coursesMenu}>
              <Link to="/courses" className="menu-link">
                Courses
              </Link>
            </Dropdown>
            <DownOutlined style={{ fontSize: '12px', color: 'black' }} />
          </li>
          <li>
            <Link to="/blogs" className="menu-link">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/services" className="menu-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="user-and-language-selector">
        <div className="user-info">
          <UserOutlined />
        </div>
        <div className="language-selector">
          <select>
            <option value="ENG">English</option>
            <option value="SPA">Spanish</option>
            <option value="TUR">Turkish</option>
            <option value="GER">German</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
