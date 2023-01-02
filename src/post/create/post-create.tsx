import { useEffect } from 'react';

/**
 * 属性类型
 */
type PostCreateProps = {};

/**
 * 组件
 */
const PostCreate = (props: PostCreateProps) => {
  useEffect(() => {
    document.title = '创建内容 - 宁皓网';
  });

  return <div>PostCreate</div>;
};

export default PostCreate;
