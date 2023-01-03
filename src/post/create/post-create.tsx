import { apiHttpClient } from 'app/app.service';
import { useEffect, useRef, useState } from 'react';

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
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);
  const [imageUploadProgress, setImageUploadProgress] = useState<number | null>(
    null,
  );

  const createPost = async () => {
    if (title && content && file) {
      try {
        const {
          data: { insertId: postId },
        } = await apiHttpClient.post('posts', { title, content });

        await createFile(file, postId);

        setTitle('');
        setContent('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImagePreviewUrl(event.target?.result as string);
    };
  };

  const createFile = async (file: File, postId: number) => {
    const formData = new FormData();

    formData.append('file', file);

    try {
      await apiHttpClient.post(`files?post=${postId}`, formData, {
        onUploadProgress: ({ loaded, total }) => {
          setImageUploadProgress(Math.round((loaded * 100) / total!));
        },
      });

      setFile(null);
      setImagePreviewUrl('');
      setImageUploadProgress(null);

      if (fileInput.current) {
        fileInput.current.value = '';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {imagePreviewUrl && (
          <div>
            <img
              style={{ maxWidth: 318, marginBottom: 16 }}
              src={imagePreviewUrl}
              alt="图像预览"
            />
          </div>
        )}
        {imageUploadProgress && <div>{imageUploadProgress}%</div>}
      </div>
      <div>
        <input
          ref={fileInput}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={({ currentTarget: { files } }) => {
            if (files && files[0]) {
              setFile(files[0]);
              createImagePreview(files[0]);
            } else {
              setFile(null);
              setImagePreviewUrl('');
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
