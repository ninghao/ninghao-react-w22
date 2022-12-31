import { ReactNode } from 'react';

/**
 * 属性类型
 */
type AppCardProps = {
  children: ReactNode;
};

/**
 * 组件
 */
const AppCard = (props: AppCardProps) => {
  const { children } = props;

  return (
    <div className="app-card">
      <div className="content">{children}</div>
    </div>
  );
};

export default AppCard;
