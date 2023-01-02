import { apiHttpClient } from 'app/app.service';
import { useEffect, useState } from 'react';

/**
 * 属性类型
 */
type PostEditProps = {};

/**
 * 组件
 */
const PostEdit = (props: PostEditProps) => {
  useEffect(() => {
    document.title = '编辑内容 - 宁皓网';
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const editPost = async () => {
    if (title && content) {
      try {
        await apiHttpClient.post('posts', { title, content });
        setTitle('');
        setContent('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="正文"
          value={content}
          onChange={(event) => {
            setContent(event.currentTarget.value);
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={editPost}>更新</button>
      </div>
    </div>
  );
};

export default PostEdit;
