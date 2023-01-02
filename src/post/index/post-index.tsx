import { appConfig } from 'app/app.config';
import { apiHttpClient } from 'app/app.service';
import { PostList } from 'post/post.type';
import { useEffect, useState } from 'react';
import editIcon from 'app/icons/edit.svg';
import './post-index.css';
import { Link } from 'react-router-dom';

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

  const [posts, setPosts] = useState<PostList>([]);

  useEffect(() => {
    apiHttpClient.get('posts').then((response) => {
      setPosts(response.data);
    });
  });

  const postListItems = posts.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <img
            src={`${appConfig.apiBaseUrl}/files/${item.file.id}/serve?size=thumbnail`}
            alt={item.title}
          />
        </div>
        <div>
          <div>{item.title}</div>
          <div>{item.content}</div>
          <div>- {item.user.name}</div>
          <div>
            <div>
              <Link to={`/posts/${item.id}/edit`}>
                <img src={editIcon} alt="编辑内容" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="post-index">
      <div className="post-list">{postListItems}</div>
    </div>
  );
};

export default PostIndex;
