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
};

export type APIRes<R> = {
  data: R;
};

export type PostDTO = Pick<JobPost, 'title' | 'description'>;
