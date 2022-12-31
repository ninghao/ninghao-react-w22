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
  fileList: FileList | null;
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
    fileList: null,
  };

  onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state);
  };

  onChange = ({ currentTarget: { files } }: FormEvent<HTMLInputElement>) => {
    this.setState({
      fileList: files,
    });
  };

  parks = [
    { id: 1, value: '大明湖' },
    { id: 2, value: '黑虎泉' },
    { id: 3, value: '趵突泉' },
  ];

  /**
   * 渲染
   */
  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <input type="file" multiple onChange={this.onChange} />
          </div>
          <pre>→ State: {JSON.stringify(this.state)}</pre>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default AppForm;
