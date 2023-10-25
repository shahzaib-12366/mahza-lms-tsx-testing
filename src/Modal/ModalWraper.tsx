import React from 'react';
import { Modal, ModalProps } from 'antd';

interface ModalWrapperProps {
  title: React.ReactNode;
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
  size: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  visible,
  onCancel,
  onOk,
  size,
  children,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      width={size}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
