import { Route } from 'react-router-dom';
import AuthLogin from './login/auth-login';

export const authRoutes = (
  <>
    <Route path="login" element={<AuthLogin />} />
  </>
);
