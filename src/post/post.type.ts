export type PostUser = {
  id: number;
  name: string;
  avatar: number;
};

export type PostFile = {
  id: number;
  width: number;
  height: number;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  user: PostUser;
  file: PostFile;
};

export type PostList = Array<Post>;
