import { useEffect } from 'react';

/**
 * 属性类型
 */
type HomeProps = {};

/**
 * 组件
 */
const Home = (props: HomeProps) => {
  useEffect(() => {
    document.title = '宁皓网';
  });

  return (
    <div>
      <h1>首页</h1>
      <div>欢迎在宁皓网学习 React。</div>
    </div>
  );
};

export default Home;
