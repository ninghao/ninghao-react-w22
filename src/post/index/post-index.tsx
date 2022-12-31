import { Component } from 'react';

/**
 * 属性类型
 */
type PostIndexProps = {};

/**
 * 状态类型
 */
type PostIndexState = {};

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
  state: PostIndexState = {};

  /**
   * 渲染
   */
  render() {
    return <div>PostIndex</div>;
  }
}

export default PostIndex;
