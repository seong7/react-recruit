import { useContext } from 'react';
import { PostContext } from '../PostContext';

export const usePost = () => {
  const state = useContext(PostContext);
  if (!state)
    throw new Error('State Not Found. Must be called under Provider.');
  return state;
};
