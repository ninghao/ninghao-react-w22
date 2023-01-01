import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/app-header';
// import PostIndex from '../post/index/post-index';

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
      <div className="app">
        <AppHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </AppContext.Provider>
  );

  return element;
};

export default App;
