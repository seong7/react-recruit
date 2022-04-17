import { rest } from 'msw';
import storage from '../storage';
import { JobPost } from '../types/common';
import { getDate, timeout, getRandomIntBetween } from '../utills';
import { getMockPosts } from './mock-data';

export function handlers() {
  return [
    rest.get('/posts', getPosts),
    rest.post('/posts', addPost),
    rest.delete('/posts', deletePost),
    rest.get('/posts/search', searchPosts),
  ];
}

const getPosts: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  let posts = storage.get('react-recruit-posts');
  if (!posts) {
    storage.set('react-recruit-posts', getMockPosts());
    posts = storage.get('react-recruit-posts');
  }

  await timeout(getRandomIntBetween(500, 1000));

  return res(
    ctx.status(200),
    ctx.json({
      data: posts,
    }),
  );
};

const addPost: Parameters<typeof rest.post>[1] = (req, res, ctx) => {
  if (req.body instanceof Object) {
    const newPost: JobPost = {
      id: Date.now(),
      title: req.body?.title as string,
      description: req.body?.description as string,
      applicants: 0,
      created_at: getDate(),
    };

    const posts = storage.get('react-recruit-posts') ?? [];
    posts.push(newPost);
    storage.set('react-recruit-posts', posts);
  }

  return res(ctx.status(200));
};

const deletePost: Parameters<typeof rest.delete>[1] = (req, res, ctx) => {
  const postId = req.url.searchParams.get('id');

  const posts: JobPost[] = storage.get('react-recruit-posts') ?? [];
  const deleteIndex = posts.findIndex((post) => post.id === Number(postId));
  posts.splice(deleteIndex, 1);
  storage.set('react-recruit-posts', posts);

  return res(ctx.status(200));
};

const searchPosts: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const keyword = decodeURIComponent(req.url.searchParams.get('keyword') ?? '');
  const posts: JobPost[] = storage.get('react-recruit-posts') ?? [];

  return res(
    ctx.status(200),
    ctx.json({
      data: posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
      ),
    }),
  );
};
