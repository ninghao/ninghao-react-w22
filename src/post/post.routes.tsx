import { Route } from 'react-router-dom';
import PostIndex from './index/post-index';
import PostShow from './show/post-show';

export const postRoutes = (
  <>
    <Route path="posts" element={<PostIndex />} />
    <Route path="posts/:postId" element={<PostShow />} />
  </>
);
