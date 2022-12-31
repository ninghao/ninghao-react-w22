import { Component } from 'react';

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

    window.setInterval(() => this.changeEmoji(), 3000);
  }

  // state: AppHeaderState = {
  //   emoji: '🌴',
  // };

  static defaultProps = {
    name: '宁皓网',
  };

  changeEmoji() {
    this.setState((state, _) => {
      return {
        emoji: state.emoji === '🌴' ? '🏕' : '🌴',
      };
    });
  }

  render() {
    const { name } = this.props;
    const { emoji } = this.state;

    return (
      <div className="app-header">
        <h1 className="title">
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
