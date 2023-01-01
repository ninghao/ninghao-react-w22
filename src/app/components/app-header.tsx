import { Component, MouseEvent } from 'react';
import AppButton from 'app/components/app-button';
import { AppContext } from 'app/app';
import lightIcon from 'app/icons/light.svg';
import darkIcon from 'app/icons/dark.svg';
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

    const loginAction = (
      <AppButton variant="primary" onClick={this.login}>
        登录
      </AppButton>
    );

    const logoutAction = (
      <AppButton variant="bordered" onClick={this.logout}>
        退出
      </AppButton>
    );

    return (
      <AppContext.Consumer>
        {({ theme, setTheme }) => (
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
              <div>
                {theme === 'light' ? (
                  <img
                    src={lightIcon}
                    alt=""
                    onClick={() => setTheme!('dark')}
                  />
                ) : (
                  <img
                    src={darkIcon}
                    alt=""
                    onClick={() => setTheme!('light')}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

AppHeader.defaultProps = {
  name: '宁皓网',
};

export default AppHeader;
