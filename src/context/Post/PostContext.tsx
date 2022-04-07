import { createContext, ReactNode, useCallback, useState } from 'react';
import { JobPost } from '../../types/common';

export type PostContextType = {
  posts: JobPost[];
  setPosts: (newPosts: JobPost[]) => void;
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

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
