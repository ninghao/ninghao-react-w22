import AuthProvider from 'auth/auth.provider';
import { ReactNode } from 'react';

/**
 * 属性类型
 */
type AppProviderProps = {
  children: ReactNode;
};

/**
 * 组件
 */
const AppProvider = (props: AppProviderProps) => {
  return <AuthProvider>{props.children}</AuthProvider>;
};

export default AppProvider;
