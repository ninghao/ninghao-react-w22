import { createContext, ReactNode } from 'react';

/**
 * 属性类型
 */
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({
  currentUser: { name: '李白' },
});

/**
 * 组件
 */
const AuthProvider = (props: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{ currentUser: { name: '李白' } }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
