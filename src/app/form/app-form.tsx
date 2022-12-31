import { Component, FormEvent, createRef } from 'react';
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

  onChange = ({ currentTarget: { value } }: FormEvent<HTMLInputElement>) => {
    this.setState({
      content: value,
    });
  };

  parks = [
    { id: 1, value: '大明湖' },
    { id: 2, value: '黑虎泉' },
    { id: 3, value: '趵突泉' },
  ];

  contentField = createRef<HTMLInputElement>();

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'e' && event.ctrlKey) {
      this.contentField.current?.focus();
    }
  };

  /**
   * 渲染
   */
  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.content}
              ref={this.contentField}
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
