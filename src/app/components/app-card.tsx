import { ReactNode } from 'react';
import './app-card.css';

/**
 * 属性类型
 */
type AppCardProps = {
  children: ReactNode;
  footer?: ReactNode;
};

/**
 * 组件
 */
const AppCard = (props: AppCardProps) => {
  const { children, footer } = props;

  return (
    <div className="app-card">
      <div className="content">{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

export default AppCard;
