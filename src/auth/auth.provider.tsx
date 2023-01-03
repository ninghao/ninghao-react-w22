import { getStorage, setStorage, StorageKey } from 'app/app.service';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

/**
 * 属性类型
 */
type AuthProviderProps = {
  children: ReactNode;
};

type CurrentUser = { id: number; name: string; token: string };

type AuthContextValue = {
  currentUser?: CurrentUser;
  setCurrentUser?: Dispatch<SetStateAction<CurrentUser | undefined>>;
};

export const AuthContext = createContext<AuthContextValue>({});

/**
 * 组件
 */
const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  useEffect(() => {
    if (currentUser !== undefined) {
      setStorage(StorageKey.currentUser, currentUser);
    } else {
      const currentUserFromStorage = getStorage<CurrentUser>(
        StorageKey.currentUser,
      );

      if (currentUserFromStorage) {
        setCurrentUser(currentUserFromStorage);
      }
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
