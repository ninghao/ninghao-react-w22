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
  checked: boolean;
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
    checked: false,
  };

  onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state);
  };

  onCheckboxChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ checked: event.currentTarget.checked });
  };

  /**
   * 渲染
   */
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.onCheckboxChange}
            />
          </div>
          <pre>→ State: {JSON.stringify(this.state)}</pre>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default AppForm;
