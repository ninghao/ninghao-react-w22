import { Component } from 'react';

type AppHeaderProps = {
  name: string;
};

class AppHeader extends Component<AppHeaderProps> {
  static defaultProps = {
    name: '宁皓网',
  };

  render() {
    const { name } = this.props;

    return (
      <div className="app-header">
        <h1 className="title">{name}</h1>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  name: '宁皓网',
};

export default AppHeader;
