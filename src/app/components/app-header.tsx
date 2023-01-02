import { Link, NavLink } from 'react-router-dom';
import { appConfig } from 'app/app.config';
import addIcon from 'app/icons/add.svg';
import accountIcon from 'app/icons/account.svg';
import './app-header.css';

/**
 * 属性类型
 */
type AppHeaderProps = {};

/**
 * 组件
 */
const AppHeader = (props: AppHeaderProps) => {
  return (
    <div className="app-header">
      <h1 className="title">
        <NavLink to="/">{appConfig.appName}</NavLink> 🌴
      </h1>
      <nav>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/posts">内容</NavLink>
      </nav>
      <div className="content">
        <div>
          <Link to="/create">
            <img src={addIcon} alt="添加内容" />
          </Link>
        </div>
        <div>
          <Link to="/login">
            <img src={accountIcon} alt="用户登录" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
