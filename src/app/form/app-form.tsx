import { Component, FormEvent } from 'react';
import './app-form.css';

/**
 * 属性类型
 */
type AppFormProps = {};

/**
 * 状态类型
 */
type AppFormState = {
  content: string;
};

/**
 * 组件
 */
class AppForm extends Component<AppFormProps, AppFormState> {
  /**
   * 默认属性
   */
  static defaultProps = {};

  /**
   * 组件状态
   */
  state: AppFormState = {
    content: '',
  };

  onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state);
  };

  onContentChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ content: event.currentTarget.value });
  };

  /**
   * 渲染
   */
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.onContentChange}
          />
          <input type="submit" value="提交" />
          <span>→ Content: {this.state.content}</span>
        </form>
      </div>
    );
  }
}

export default AppForm;
