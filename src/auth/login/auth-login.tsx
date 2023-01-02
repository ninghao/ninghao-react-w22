import { apiHttpClient } from 'app/app.service';
import { AuthContext } from 'auth/auth.provider';
import { useContext, useEffect, useState } from 'react';

/**
 * 属性类型
 */
type AuthLoginProps = {};

/**
 * 组件
 */
const AuthLogin = (props: AuthLoginProps) => {
  useEffect(() => {
    document.title = '用户登录 - 宁皓网';
  });

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { setCurrentUser } = useContext(AuthContext);

  const login = async () => {
    if (name && password) {
      try {
        const { data } = await apiHttpClient.post('login', { name, password });
        setCurrentUser!(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="名字"
          autoComplete="username"
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="密码"
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <button onClick={login}>登录</button>
      </div>
    </form>
  );
};

export default AuthLogin;
