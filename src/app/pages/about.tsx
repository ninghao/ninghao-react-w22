import { useEffect } from 'react';

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
    </div>
  );
};

export default About;
