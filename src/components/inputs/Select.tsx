import React from 'react';
import { Select, Space } from 'antd';
import Checkbox from './Checkbox';
interface CustomSelectProps {
  customStyle?: React.CSSProperties;
  options?: Array<{ value: string; label: string }>;
  variant: 'multi-select' | 'single-select';
  handleChange?: (value: string[]) => void;
  selected?: string[];
}

export default function CustomSelect({
  customStyle,
  options,
  variant,
  handleChange,
  selected,
}: CustomSelectProps): JSX.Element {
  const { Option } = Select;

  return (
    variant === 'multi-select' ? (
      <Select
        style={{
          width: "100%",
          height: "50px",
          ...customStyle
        }}
        mode="multiple"
        allowClear
      >
        <Option value="china" label="China">
          <Space>
            <span>
              <Checkbox />
            </span>
            China (中国)
          </Space>
        </Option>
      </Select>
    ) : (
      <Select
        style={{
          width: "100%",
          height: "50px",
          ...customStyle
        }}
        onChange={handleChange}
        value={selected}
        options={options || [
          {
            value: 'jack',
            label: 'Jack',
          }
        ]}
      />
    )
  );
}
