import { useEffect } from 'react';

/**
 * 属性类型
 */
type PostIndexProps = {};

/**
 * 组件
 */
const PostIndex = (props: PostIndexProps) => {
  useEffect(() => {
    document.title = '内容 - 宁皓网';
  });

  return (
    <div>
      <h1>内容</h1>
    </div>
  );
};

export default PostIndex;
