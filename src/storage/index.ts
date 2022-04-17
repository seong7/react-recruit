const set = (key: StorageKeys, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: StorageKeys) => {
  const item = localStorage.getItem(key);
  if (!item || item === 'undefined') return;
  return JSON.parse(item);
};

const remove = (key: StorageKeys) => {
  localStorage.removeItem(key);
};

type StorageKeys = 'react-recruit-posts';

export default {
  set,
  get,
  remove,
};
