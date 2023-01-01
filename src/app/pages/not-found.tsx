import { useEffect } from 'react';

/**
 * 属性类型
 */
type NotFoundProps = {};

/**
 * 组件
 */
const NotFound = (props: NotFoundProps) => {
  useEffect(() => {
    document.title = '404';
  });

  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
