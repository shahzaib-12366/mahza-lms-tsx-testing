import React, { useState } from 'react';
import { Tabs } from 'antd';
import { ReactComponent as DownArrow } from '../../../assets/images/chevron-down.svg';
import Video from './UploadedContent/Video';

const { TabPane } = Tabs;

const tabData: Record<string, number> = {
    "Video": 22,
    "Audio": 20,
    "PDF": 15,
    "TEXT": 10,
    "Downloads": 5,
};

function ChapterContent() {
    const [showTabsContent, setShowTabsContent] = useState(true);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleTabsContent = () => {
        setShowTabsContent(!showTabsContent);
        setArrowRotation(arrowRotation === 0 ? 180 : 0);
    };

    return (
        <div className="chapter-content-section-tabs">
            <Tabs defaultActiveKey="0">
                {Object.keys(tabData).map((tabKey, index) => (
                    <TabPane tab={`${tabKey} ${tabData[tabKey]}`} key={index.toString()}>
                        {showTabsContent && index === 0 ? <Video /> : null}
                    </TabPane>
                ))}
            </Tabs>
            <span className="down-arrow-icon" onClick={toggleTabsContent} style={{ transform: `rotate(${arrowRotation}deg)` }}><DownArrow /></span>
        </div>
    );
}

export default ChapterContent;
