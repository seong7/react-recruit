import { JobPost } from '../types/common';

export const getDate = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const myDate = new Date(date.getTime() - offset * 60 * 1000);
  return myDate.toISOString().split('T')[0] as JobPost['created_at'];
};

export const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomIntBetween = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

export const isRegex = (value: unknown): value is RegExp =>
  value instanceof RegExp;

export const isObjectEmpty = (param: object) =>
  param.constructor === Object && Object.keys(param).length === 0;
