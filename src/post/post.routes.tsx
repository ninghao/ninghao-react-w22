import { Route } from 'react-router-dom';
import PostIndex from './index/post-index';

export const postRoutes = (
  <>
    <Route path="posts" element={<PostIndex />} />
  </>
);
