import React from 'react';
import { Tabs } from 'antd';
import { Collapse } from 'antd';
import CustomRadio from '../../components/inputs/Radio';
import CustomCheckbox from '../../components/inputs/Checkbox';
// import Questions from './Questions';

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function QuizBuilder() {
  return (
    <div className="quizzes-container">
      <div className="d-flex">
        <h1>Create A Quiz</h1>
      </div>
      <div>
        <Tabs>
          <TabPane tab="Detail" key="detail">
            <div className="d-flex flex-column" style={{ gap: '10px' }}>
              <Collapse
                size="large"
                expandIconPosition="end"
                style={{ backgroundColor: 'white' }}
                className="test"
                bordered={false}
              >
                <Panel header={<h4 style={{ margin: '0' }}>General Info</h4>} key="1">
                  <p>Content of General Info</p>
                </Panel>
              </Collapse>
              <Collapse
                size="large"
                expandIconPosition="end"
                style={{ backgroundColor: 'white' }}
                className="test"
                bordered={false}
              >
                <Panel header={<h4 style={{ margin: '0' }}>Quiz Type:</h4>} key="1">
                  <div className="d-flex" style={{ gap: '10px' }}>
                    <span className="d-flex align-start gap-5">
                      <CustomRadio />
                      Practical Quiz
                    </span>
                    <span className="d-flex align-start gap-5">
                      <CustomRadio />
                      Grade Quiz
                    </span>
                    <span className="d-flex align-start gap-5">
                      <CustomRadio />
                      Graded Survey
                    </span>
                    <span className="d-flex align-start gap-5">
                      <CustomRadio />
                      Ungraded Survey
                    </span>
                  </div>
                </Panel>
              </Collapse>
              <Collapse
                size="large"
                expandIconPosition="end"
                style={{ backgroundColor: 'white' }}
                className="test"
                bordered={false}
              >
                <Panel header={<h4 style={{ margin: '0' }}>Assignment Group:</h4>} key="1">
                  <div className="d-flex flex-column gap-10">
                    <div className="d-flex" style={{ gap: '20px' }}>
                      <span className="d-flex align-center gap-5">
                        <CustomCheckbox />
                        Shuffle Answers
                      </span>
                      <span className="d-flex align-center gap-5">
                        <CustomCheckbox />
                        Let students see their responses
                      </span>
                      <span className="d-flex align-center gap-5">
                        <CustomCheckbox />
                        Allow Multiple Attempts
                      </span>
                      <span className="d-flex align-center gap-5">
                        <CustomCheckbox />
                        Show one question at a time
                      </span>
                    </div>
                    <div className="d-flex" style={{ gap: '20px' }}>
                      <span className="d-flex align-center gap-5">
                        <CustomCheckbox />
                        Time Limit
                      </span>
                      <button className="d-flex align-center minutes-button p2 gap-5">
                        Minutes
                        <input
                          type="text"
                          className="text-center"
                          style={{ height: '24px', width: '34px', fontSize: '16px', fontWeight: 600 }}
                        />
                      </button>
                      <span className="d-flex align-center gap-5">
                        <CustomCheckbox />
                        Shuffle Answers
                      </span>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse
                size="large"
                expandIconPosition="end"
                style={{ backgroundColor: 'white' }}
                className="test"
                bordered={false}
              >
                <Panel header={<h4 style={{ margin: '0' }}>Quiz Restriction:</h4>} key="1">
                  <div className="d-flex flex-column gap-10">
                    <span className="d-flex align-center gap-5">
                      <CustomCheckbox />
                      Require An Access Code
                    </span>
                    <span className="d-flex align-center gap-5">
                      <CustomCheckbox />
                      Filter IP Address
                    </span>
                  </div>
                </Panel>
              </Collapse>
              <Collapse
                size="large"
                expandIconPosition="end"
                style={{ backgroundColor: 'white' }}
                className="test"
                bordered={false}
              >
                <Panel header={<h4 style={{ margin: '0' }}>Quiz Restrictions:</h4>} key="1">
                  <div className="d-flex flex-column gap-10">
                    <span className="d-flex align-center gap-5">
                      <CustomCheckbox />
                      Assign To Everyone
                    </span>
                    <span className="d-flex align-center gap-5">
                      <CustomCheckbox />
                      Create A Group
                    </span>
                  </div>
                </Panel>
              </Collapse>
              <div className="d-flex justify-end gap-10">
                <button className="reset-button">Reset All</button>
                <button className="save-btn">Save & Continue</button>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Questions" key="questions">
            {/* <Questions /> */}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
