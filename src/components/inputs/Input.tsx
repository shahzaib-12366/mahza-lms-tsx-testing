import React, { ChangeEvent, FocusEvent, CSSProperties } from 'react';
import { Input } from 'antd';

interface CustomInputProps {
  placeholder?: string;
  customClass?: string;
  height?: number;
  width?: number;
  customStyles?: CSSProperties;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  placeholder,
  customClass,
  height,
  width,
  customStyles,
  onChange,
  onBlur,
}: CustomInputProps): JSX.Element {
  return (
    <Input
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      style={{ ...customStyles, height, width }}
      className={`custom-input ${customClass}`}
    />
  );
}
