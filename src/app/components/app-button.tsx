import { MouseEventHandler, ReactNode } from 'react';
import './app-button.css';

/**
 * 属性类型
 */
type AppButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'bordered';
  onClick?: MouseEventHandler;
};

/**
 * 组件
 */
const AppButton = ({ children, variant, onClick }: AppButtonProps) => {
  let className = 'app-button';

  if (variant) {
    className = `${className} ${variant}`;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default AppButton;
