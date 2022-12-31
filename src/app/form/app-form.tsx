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
  items: Array<string>;
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
    items: [],
  };

  onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state);
  };

  onChange = ({
    currentTarget: { value, checked },
  }: FormEvent<HTMLInputElement>) => {
    const items = new Set(this.state.items);

    if (checked) {
      items.add(value);
    } else {
      items.delete(value);
    }

    this.setState({
      items: Array.from(items),
    });
  };

  isChecked = (currentItem: string) => {
    return this.state.items.some((item) => item === currentItem);
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
            {this.parks.map((item) => (
              <label>
                <input
                  type="checkbox"
                  id={`tag-${item.id}`}
                  onChange={this.onChange}
                  checked={this.isChecked(item.value)}
                  value={item.value}
                />
                {item.value}
              </label>
            ))}
          </div>
          <pre>→ State: {JSON.stringify(this.state)}</pre>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default AppForm;
