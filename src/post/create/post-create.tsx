import { apiHttpClient } from 'app/app.service';
import { useEffect, useState } from 'react';

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

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>();

  const createPost = async () => {
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
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={({ currentTarget: { files } }) => {
            if (files && files[0]) {
              setFile(files[0]);
            } else {
              setFile(null);
            }
          }}
        />
      </div>
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
        <button onClick={createPost}>发布</button>
      </div>
    </div>
  );
};

export default PostCreate;
