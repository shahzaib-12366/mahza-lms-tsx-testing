import React from 'react';
import { Progress } from 'antd';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps): JSX.Element {
  return <Progress percent={progress} strokeColor={'#10BAAC'} size={['100%', 10]} />;
}
