import { useEffect } from 'react';

/**
 * 属性类型
 */
type AuthLoginProps = {};

/**
 * 组件
 */
const AuthLogin = (props: AuthLoginProps) => {
  useEffect(() => {
    document.title = '用户登录 - 宁皓网';
  });

  return <div>AuthLogin</div>;
};

export default AuthLogin;
