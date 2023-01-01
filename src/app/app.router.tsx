import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app';
import About from './pages/about';
import Home from './pages/home';

/**
 * 属性类型
 */
type AppRouterProps = {};

/**
 * 组件
 */
const AppRouter = (props: AppRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
