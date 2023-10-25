import React, { useState } from 'react';
import Button from '../../../components/shared/Button';
import { ReactComponent as Swamp } from '../../../assets/images/swap.svg';
import { ReactComponent as Edit } from '../../../assets/images/edit.svg';
import { ReactComponent as DownArrow } from '../../../assets/images/chevron-down.svg';
import ChapterDetail from './ChapterDetail';
import Video from './UploadedContent/Video';
// import CourseDetail from '../Create-course/Course-details';
import AddChapter from '../Create-course/addChapter';
import Upload from './Upload';
import { SMALL_MODAL, MEDIUM_MODAL, LARGE_MODAL } from '../../../Constants/ModalSizes';
import { Tabs, Modal } from 'antd';

const { TabPane } = Tabs;

interface CourseData {
  title: string;
  description: string;
}

function CourseSectionContainer() {
    const [showTabsContent, setShowTabsContent] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSmallModalVisible, setIsSmallModalVisible] = useState(false);
    const [isChapterModalVisible, setIsChapterModalVisible] = useState(false);
    const [courseData, setCourseData] = useState<CourseData>({ title: '', description: '' });
    const [sections, setSections] = useState<CourseData[]>([]);
    const [chapters, setChapters] = useState<CourseData[][]>([]);
    const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
    const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(null);

    const toggleTabsContent = (sectionIndex: number) => {
        setExpandedSections({
            ...expandedSections,
            [sectionIndex]: !expandedSections[sectionIndex],
        });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const showContentModal = () => {
        setIsSmallModalVisible(true);
    }

    const showChapterModal = (sectionIndex: number) => {
        setActiveSectionIndex(sectionIndex);
        setIsChapterModalVisible(true);
    }

    const handleOk = () => {
        setIsSmallModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsSmallModalVisible(false);
        setIsChapterModalVisible(false);
        setActiveSectionIndex(null);
    };

    // Function to receive course data from CourseDetails
    const handleCourseData = (data: CourseData) => {
        setCourseData(data);
        setSections([...sections, data]);
        setIsModalVisible(false);
    };

    // Function to add a new chapter to the current section
    const handleChapterData = (title: string, description: string) => {
        if (activeSectionIndex !== null) {
            const newChapter = {
                title,
                description,
            };
            const updatedChapters = [...chapters];
            updatedChapters[activeSectionIndex] = [
                ...(updatedChapters[activeSectionIndex] || []),
                newChapter,
            ];
            setChapters(updatedChapters);
        }
        setIsChapterModalVisible(false);
    };

    const AddSectionModal = (
        <Modal
            title="Add Section"
            visible={isModalVisible}
            onCancel={handleCancel}
            width="900px"
        >
            {/* Content for your modal */}
            {/* <CourseDetail onsaveclick={handleCourseData} /> */}
        </Modal>
    );

    const AddSectionContentModal = (
        <Modal
            title="Add Section's Content"
            visible={isSmallModalVisible}
            onCancel={handleCancel}
            onOk={handleOk}
            width="900px"
        >
            <Upload />
        </Modal>
    );

    const AddChapterModal = (
        <Modal
            title="Add Section's Content"
            visible={isChapterModalVisible}
            onCancel={handleCancel}
            width="900px"
        >
            <AddChapter onsaveclick={handleChapterData} />
        </Modal>
    );

    return (
        <>
            <div className="course-section-container">
                {/* <Button className="add-section-btn" onClick={showModal}>
                    <span className='btn-icon'>+</span>Section
                </Button> */}
                {sections.map((section, index) => (
                    <div className="section-wrapper" key={index}>

                        <div className="section-header">
                            <div className="section-title-wraper">
                                <Swamp />
                                <div className="title">
                                    <h2>{section.title}</h2>
                                    <Edit style={{ fontSize: '16px' }} />
                                </div>

                            </div>
                            {/* <div className="section-btns">
                                <Button className='add-content-btn' onClick={showContentModal}><span className='btn-icon' >+</span> Content</Button>
                                <Button className='add-chapter-btn' onClick={() => showChapterModal(index)}><span className='btn-icon' >+</span> Chapter</Button>
                            </div> */}
                        </div>

                        {/* <div className="section-tabs">
                            <Tabs defaultActiveKey="0">
                                {Object.keys(tabData).map((tabKey, tabIndex) => (
                                    <TabPane tab={`${tabKey} ${tabData[tabKey]}`} key={tabIndex.toString()}>
                                        {showTabsContent && tabIndex === 0 && expandedSections[index] ? <Video /> : null}
                                    </TabPane>
                                ))}
                            </Tabs>
                            <span className="down-arrow-icon" onClick={() => toggleTabsContent(index)} style={{ transform: `rotate(${expandedSections[index] ? 180 : 0}deg)` }}>
                                <DownArrow />
                            </span>
                        </div> */}
                        {chapters[index] &&
                            chapters[index].map((chapter, chapterIndex) => (
                                <ChapterDetail
                                    key={chapterIndex}
                                    title={`Chapter ${chapterIndex + 1}: ${chapter.title}`}
                                    description={chapter.description}
                                    // showTabsContent={showTabsContent && expandedSections[index]}
                                />
                            ))}
                    </div>
                ))}
                {/* <Button className="add-section-btn" onClick={showModal}> <span className='btn-icon'>+</span>Section</Button> */}
            </div>
            {AddSectionModal}
            {AddSectionContentModal}
            {AddChapterModal}
        </>
    );
}

export default CourseSectionContainer;
