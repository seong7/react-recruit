import { rest } from 'msw';
import storage from '../storage';
import { JobPost } from '../types/common';
import { getDate, timeout, getRandomIntBetween } from '../utills';

export function handlers() {
  return [
    rest.get('/posts', getPosts),
    rest.post('/posts', addPost),
    rest.delete('/posts', deletePost),
  ];
}

const getPosts: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  const posts = storage.get('posts');
  if (!posts) storage.set('posts', []);

  await timeout(getRandomIntBetween(500, 1000));

  return res(
    ctx.status(200),
    ctx.json({
      data: posts ?? [],
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

    const posts = storage.get('posts') ?? [];
    posts.push(newPost);
    storage.set('posts', posts);
  }

  return res(ctx.status(200));
};

const deletePost: Parameters<typeof rest.delete>[1] = (req, res, ctx) => {
  const postId = req.url.searchParams.get('id');

  const posts: JobPost[] = storage.get('posts') ?? [];
  const deleteIndex = posts.findIndex((post) => post.id === Number(postId));
  posts.splice(deleteIndex, 1);
  storage.set('posts', posts);

  return res(ctx.status(200));
};
