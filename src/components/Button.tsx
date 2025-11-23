import React from 'react';
import styles from '@/styles/components/Button.module.scss';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  type?: ButtonType;
  block?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   size = 'md',
   color = 'primary',
   type = 'button',
   block = false,
   disabled = false,
   children,
   ...props
 }) => {
  return (
    <button
      className={`
        ${styles['button']}
        ${size ? styles[size] : ''}
        ${color ? styles[color] : ''}
        ${block ? styles['block'] : ''}
      `}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
