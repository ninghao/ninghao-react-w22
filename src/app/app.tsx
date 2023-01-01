import { createContext, Dispatch, SetStateAction, useState } from 'react';
import AppHeader from './components/app-header';
// import PostIndex from '../post/index/post-index';
import AppHook from './hook/app-hook';

type AppContextValue = {
  theme: string;
  setTheme?: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<AppContextValue>({
  theme: 'light',
});

const App = () => {
  const [theme, setTheme] = useState('light');

  const element = (
    <AppContext.Provider value={{ theme, setTheme }}>
      <div className="container">
        <AppHeader />
        <AppHook />
      </div>
    </AppContext.Provider>
  );

  return element;
};

export default App;
