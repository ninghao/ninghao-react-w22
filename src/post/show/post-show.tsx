import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * 属性类型
 */
type PostShowProps = {};

/**
 * 组件
 */
const PostShow = (props: PostShowProps) => {
  const { postId } = useParams();

  useEffect(() => {
    document.title = `内容 ${postId}`;
  });

  return <div>PostShow {postId}</div>;
};

export default PostShow;
