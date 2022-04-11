import { createContext, ReactNode, useCallback, useState } from 'react';
import { JobPost } from '../../types/common';

export type PostContextType = {
  posts: JobPost[];
  setPosts: (newPosts: JobPost[]) => void;
  getPostById: (id: JobPost['id']) => JobPost | undefined;
};

export const PostContext = createContext<PostContextType | undefined>(
  undefined,
);

export default function PostContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [posts, _setPosts] = useState<JobPost[]>([]);

  const setPosts = useCallback((newPosts: JobPost[]) => {
    _setPosts(newPosts);
  }, []);

  const getPostById = useCallback(
    (id: JobPost['id']) => {
      return posts.find((post) => post.id === id);
    },
    [posts],
  );

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        getPostById,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
