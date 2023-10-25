import React from 'react';
import { FiSettings } from 'react-icons/fi';

interface SidebarBottomProps {
    isExpanded: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function SidebarBottom({ isExpanded, onMouseEnter, onMouseLeave }: SidebarBottomProps) {
    return (
        <div className="sidebar-bottom-bar">
            <div className="sidebar-wrapper">
                <div className="sidebar-bottom-item">
                    <FiSettings className="sidebar-icon" />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
}
