import AppHeader from './components/app-header';
import PostIndex from '../post/index/post-index';

const App = () => {
  const element = (
    <div className="container">
      <AppHeader />
      <PostIndex />
    </div>
  );

  return element;
};

export default App;
