import React, { useState } from 'react';
import { Tabs } from 'antd';
// import CourseDetials from './Course-details';
import CourseSectionContainer from './CourseSectionContainer';

const { TabPane } = Tabs;

function CourseTabs() {
  const [showsection, setshowsection] = useState(false);

  const handlesaveclick = () => {
    setshowsection(!showsection);
  }

  // Sample data for tab values (you can replace this with actual data)
  const tabData = {
    curriculum: 23,
    bulkImporter: 16,
    settings: 25,
    drip: 8,
    pricing: 12,
    publish: 7,
  };

  return (
    <Tabs defaultActiveKey="curriculum">
      {/* <TabPane tab={`Curriculum ${tabData.curriculum}`} key="curriculum">
        {showsection ? (
          <CourseSectionContainer />
        ) : (
          <CourseDetials onsaveclick={handlesaveclick} />
        )}
      </TabPane> */}
      <TabPane tab={`Bulk Importer ${tabData.bulkImporter}`} key="bulkImporter">
      </TabPane>
      <TabPane tab={`Settings ${tabData.settings}`} key="settings">
      </TabPane>
      <TabPane tab={`Drip ${tabData.drip}`} key="drip">
      </TabPane>
      <TabPane tab={`Pricing ${tabData.pricing}`} key="pricing">
      </TabPane>
      <TabPane tab={`Publish ${tabData.publish}`} key="publish">
      </TabPane>
    </Tabs>
  );
}

export default CourseTabs;
