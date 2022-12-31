import AppHeader from './components/app-header';
// import PostIndex from '../post/index/post-index';
import AppHook from './hook/app-hook';

const App = () => {
  const element = (
    <div className="container">
      <AppHeader />
      <AppHook />
    </div>
  );

  return element;
};

export default App;
