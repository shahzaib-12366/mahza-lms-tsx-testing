import React from 'react';
import { DownOutlined, PoweroffOutlined } from '@ant-design/icons';
import { ReactComponent as Dashboardicon } from '../../assets/images/Icon.svg';
import { ReactComponent as User } from '../../assets/images/user.svg';
import { ReactComponent as Products } from '../../assets/images/manageproduct.svg';
import { ReactComponent as Market } from '../../assets/images/market.svg';
import { ReactComponent as DesignSite } from '../../assets/images/sitedesign.svg';
import { ReactComponent as Analytics } from '../../assets/images/analytics.svg';
import { ReactComponent as Settings } from '../../assets/images/settings.svg';
import { ReactComponent as Apps } from '../../assets/images/apps.svg';

const Sidebar: React.FC = () => {
    return (
        <div className="teacher-sidebar">
            <div className="top-section">
                <div className="dashboard-section">
                    <div className="section">
                        <Dashboardicon className="icon" />
                        <span className="heading">Dashboard</span>
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <User className="icon" />
                        <span className="heading">User Management</span>
                    </div>
                    <div className="down-arrow">
                        <DownOutlined className='item-icon' style={{ marginTop: '7px' }} />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <Products className="icon" />
                        <span className="heading">Manage Products</span>
                    </div>
                    <div className="down-arrow">
                        <DownOutlined className='item-icon' style={{ marginTop: '7px' }} />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <Market className="icon" />
                        <span className="heading">Market and Sell</span>
                    </div>
                    <div className="down-arrow">
                        <DownOutlined className='item-icon' style={{ marginTop: '7px' }} />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <DesignSite className="icon" />
                        <span className="heading">Design Your Site</span>
                    </div>
                    <div className="down-arrow">
                        <DownOutlined className='item-icon' style={{ marginTop: '7px' }} />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <Analytics className="icon" />
                        <span className="heading">Analytics</span>
                    </div>
                    <div className="down-arrow">
                        <DownOutlined className='item-icon' style={{ marginTop: '7px' }} />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <Settings className="icon" />
                        <span className="heading">Settings</span>
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="section">
                        <Apps className="icon" />
                        <span className="heading">Apps</span>
                    </div>
                </div>
            </div>
            <div className="teacher-bottom-bar">
                <div className="sidebar-items">
                    <div className="section">
                        <PoweroffOutlined className="icon" style={{ fontSize: '20px', color: 'gray' }} />
                        <span className="heading">Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
