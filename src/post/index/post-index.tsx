import { Component } from 'react';

/**
 * 属性类型
 */
type PostIndexProps = {};

/**
 * 状态类型
 */
type PostListItem = {
  id: number;
  content: string;
  author: string;
};

type PostIndexState = {
  postList: Array<PostListItem>;
};

/**
 * 组件
 */
class PostIndex extends Component<PostIndexProps, PostIndexState> {
  /**
   * 默认属性
   */
  static defaultProps = {};

  /**
   * 组件状态
   */
  state: PostIndexState = {
    postList: [
      {
        id: 1,
        content: '故人西辞黄鹤楼，烟花三月下扬州',
        author: '李白',
      },
      {
        id: 2,
        content: '好雨知时节，当春乃发生',
        author: '杜甫',
      },
      {
        id: 3,
        content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
        author: '白居易',
      },
    ],
  };

  /**
   * 渲染
   */
  render() {
    const posts = this.state.postList.map((post) => {
      return (
        <div key={post.id}>
          {post.content} - <small>{post.author}</small>
        </div>
      );
    });

    return <div>{posts}</div>;
  }
}

export default PostIndex;
