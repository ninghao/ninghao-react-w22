import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

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

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>内容</h1>
      <div>
        <div>
          <strong>search: </strong>
          {searchParams.get('search')}
        </div>
        <input
          type="text"
          onChange={({ currentTarget: { value } }) => {
            if (value) {
              setSearchParams({ search: value });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>
    </div>
  );
};

export default PostIndex;
