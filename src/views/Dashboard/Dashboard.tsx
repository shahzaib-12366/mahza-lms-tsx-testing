import React, { useState } from 'react';
import Sidebar from '../Sidebar/sidebar';
import MainContent from './MainContent';
import Header from '../Header/header';
import Landingheader from '../LandingPage/header';

function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleMouseEnter = () => {
    setIsExpanded(true);
  }

  const handleMouseLeave = () => {
    setIsExpanded(false);
  }

  return (
    <div>
      {/* <Header/> */}
      <Landingheader/>
      <Sidebar
        isExpanded={isExpanded}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        setIsExpanded={setIsExpanded}
        selectedItem={selectedItem} 
        setSelectedItem={setSelectedItem}
      />
      <MainContent isExpanded={isExpanded} selectedItem={selectedItem}/>
    </div>
  );
}

export default Dashboard;
