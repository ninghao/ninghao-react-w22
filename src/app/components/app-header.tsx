import { Component, MouseEvent } from 'react';
import './app-header.css';

type AppHeaderProps = {
  name: string;
};

type AppHeaderState = {
  emoji: string;
  isLoggedIn: boolean;
};

class AppHeader extends Component<AppHeaderProps, AppHeaderState> {
  constructor(props: AppHeaderProps) {
    super(props);

    this.state = {
      emoji: '🌴',
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  // state: AppHeaderState = {
  //   emoji: '🌴',
  // };

  static defaultProps = {
    name: '宁皓网',
  };

  changeEmoji = (event: MouseEvent) => {
    console.log('点击标题', event);

    this.setState((state, _) => {
      return {
        emoji: state.emoji === '🌴' ? '🏕' : '🌴',
      };
    });
  };

  render() {
    const { name } = this.props;
    const { emoji, isLoggedIn } = this.state;

    const loginAction = <button onClick={this.login}>登录</button>;
    const logoutAction = <button onClick={this.logout}>退出</button>;

    return (
      <div className="app-header">
        <h1
          onClick={this.changeEmoji}
          className="title"
          style={{ cursor: 'pointer', fontSize: '24px' }}
        >
          {name} {emoji}
        </h1>
        <div className="content">
          {isLoggedIn && <div>你好，开发者！</div>}
          {isLoggedIn ? logoutAction : loginAction}
        </div>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  name: '宁皓网',
};

export default AppHeader;
