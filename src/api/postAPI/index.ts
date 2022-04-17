import { API } from '../index';
import { JobPost } from '../../types/common';

export const postAPI = {
  getPosts: () => {
    return API.get<APIRes<JobPost[]>>({ url: '/posts' });
  },

  addPost: (post: PostDTO) => {
    return API.post<null, undefined, PostDTO>({
      url: '/posts',
      body: post,
    });
  },

  deletePost: (postId: JobPost['id']) => {
    return API.delete({
      url: `/posts`,
      query: {
        id: postId,
      },
    });
  },

  searchPosts: (keyword: string) => {
    return API.get<APIRes<JobPost[]>, { keyword: string }>({
      url: '/posts/search',
      query: {
        keyword: encodeURIComponent(keyword),
      },
    });
  },
};

export type APIRes<R> = {
  data: R;
};

export type PostDTO = Pick<JobPost, 'title' | 'description'>;
