import React from 'react';
import { Alert, Space } from 'antd';

interface CustomAlertProps {
  type: 'success' | 'info' | 'warning' | 'error';
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type }) => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      message="Success Text"
      type={type}
      closeIcon
    />
  </Space>
);

export default CustomAlert;
