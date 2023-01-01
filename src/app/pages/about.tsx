import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * 属性类型
 */
type AboutProps = {};

/**
 * 组件
 */
const About = (props: AboutProps) => {
  useEffect(() => {
    document.title = '关于 - 宁皓网';
  });

  return (
    <div>
      <h1>关于</h1>
      <div>宁皓网创建于 2011 年。</div>
      <Link to="/">← 回到首页</Link>
    </div>
  );
};

export default About;
