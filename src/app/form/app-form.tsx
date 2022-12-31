import { Component, FormEvent } from 'react';
import './app-form.css';

/**
 * 属性类型
 */
type AppFormProps = {};

/**
 * 状态类型
 */
type AppFormState = {};

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
  state: AppFormState = {};

  onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  /**
   * 渲染
   */
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" name="content" />
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default AppForm;
