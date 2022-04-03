import { rest } from 'msw';

export function handlers() {
  return [rest.get('/test', getTest)];
}

const getTest: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: 'test',
    }),
  );
};
