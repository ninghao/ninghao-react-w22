import { Component, MouseEvent } from 'react';

type AppHeaderProps = {
  name: string;
};

type AppHeaderState = {
  emoji: string;
};

class AppHeader extends Component<AppHeaderProps, AppHeaderState> {
  constructor(props: AppHeaderProps) {
    super(props);

    this.state = {
      emoji: '🌴',
    };
  }

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
    const { emoji } = this.state;

    return (
      <div className="app-header">
        <h1
          onClick={this.changeEmoji}
          className="title"
          style={{ cursor: 'pointer', fontSize: '24px' }}
        >
          {name} {emoji}
        </h1>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  name: '宁皓网',
};

export default AppHeader;
