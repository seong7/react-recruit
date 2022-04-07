import { useContext } from 'react';
import { SideBarContext } from '../SideBarContext';

export const useSideBarState = () => {
  const state = useContext(SideBarContext);
  if (!state)
    throw new Error('State Not Found. Must be called inside Provider.');
  return state;
};
