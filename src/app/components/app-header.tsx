type AppHeaderProps = {
  name: string;
};

const AppHeader = (props: AppHeaderProps) => {
  const { name } = props;

  return (
    <div className="app-header">
      <h1 className="title">{name}</h1>
    </div>
  );
};

AppHeader.defaultProps = {
  name: '宁皓网',
};

export default AppHeader;
