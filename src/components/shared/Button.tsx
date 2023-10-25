import React, { ReactNode, CSSProperties, MouseEventHandler } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  variant: 'primary' | 'success' | 'pending' | 'default';
  className: string;
  customStyle: CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
  childClasses: string;
}

export default function CustomButton({
  children,
  variant,
  className,
  customStyle,
  onClick,
  childClasses,
}: CustomButtonProps): JSX.Element {
  const buttonClass =
    variant === 'primary'
      ? 'primary-button'
      : variant === 'success'
      ? 'success-button'
      : variant === 'pending'
      ? 'pending-button'
      : 'default-button';

  return (
    <button onClick={onClick} style={customStyle} className={`${buttonClass} ${className}`}>
      <span className={`btn-text ${childClasses}`}>{children}</span>
    </button>
  );
}
