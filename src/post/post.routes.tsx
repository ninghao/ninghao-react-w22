import { Route } from 'react-router-dom';
import PostCreate from './create/post-create';
import PostEdit from './edit/post-edit';
import PostIndex from './index/post-index';
import PostShow from './show/post-show';

export const postRoutes = (
  <>
    <Route path="posts" element={<PostIndex />} />
    <Route path="posts/:postId" element={<PostShow />} />
    <Route path="create" element={<PostCreate />} />
    <Route path="posts/:postId/edit" element={<PostEdit />} />
  </>
);
