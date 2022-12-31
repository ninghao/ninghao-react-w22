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
  item: string;
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
    item: '黑虎泉',
  };

  onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state);
  };

  onChange = ({ currentTarget: { value } }: FormEvent<HTMLSelectElement>) => {
    this.setState({
      item: value,
    });
  };

  isChecked = (currentItem: string) => {
    return this.state.item === currentItem;
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
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <select value={this.state.item} onChange={this.onChange}>
              {this.parks.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <pre>→ State: {JSON.stringify(this.state)}</pre>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default AppForm;
