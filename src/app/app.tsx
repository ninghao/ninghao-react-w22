import AppHeader from './components/app-header';
// import PostIndex from '../post/index/post-index';
import AppForm from './form/app-form';

const App = () => {
  const element = (
    <div className="container">
      <AppHeader />
      <AppForm />
    </div>
  );

  return element;
};

export default App;
