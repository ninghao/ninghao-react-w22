import { Component } from 'react';

type AppHeaderProps = {
  name: string;
};

type AppHeaderState = {
  emoji: string;
};

class AppHeader extends Component<AppHeaderProps, AppHeaderState> {
  timer?: number;

  constructor(props: AppHeaderProps) {
    super(props);

    this.state = {
      emoji: '🌴',
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.changeEmoji(), 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log('AppHeader: componentDidUpdate', this.state.emoji);
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
