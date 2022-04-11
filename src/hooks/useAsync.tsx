import { DependencyList, useEffect, useReducer } from 'react';

export function useAsync<R>(
  { callback, disableRunOnDepsChange = false }: UseAsyncProps<R>,
  deps?: DependencyList,
) {
  const reducer = getReducer<R>();

  const [state, dispatch] = useReducer<typeof reducer>(reducer, {
    status: undefined,
    data: null,
  });

  const fetch = async () => {
    dispatch({ type: 'LOADING', data: null });

    try {
      const result = await callback();
      dispatch({ type: 'SUCCEEDED', data: result });
    } catch (e) {
      dispatch({ type: 'FAILED', data: null });
    }
  };

  useEffect(() => {
    if (deps !== undefined && !disableRunOnDepsChange) fetch();
  }, deps ?? []);

  return { state, fetch };
}

const getReducer =
  <T,>() =>
  (_: StateType<T>, action: Action<T>): StateType<T> => {
    switch (action.type) {
      case 'LOADING':
        return {
          status: 'loading',
          data: null,
        };
      case 'SUCCEEDED':
        return {
          status: 'succeeded',
          data: action.data,
        };
      case 'FAILED':
        return {
          status: 'failed',
          data: null,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

export interface UseAsyncProps<R> {
  callback: () => Promise<R>;
  disableRunOnDepsChange?: boolean;
}

type Status = 'loading' | 'succeeded' | 'failed' | undefined;

type ActionType = 'LOADING' | 'SUCCEEDED' | 'FAILED';

type Action<T> = { type: ActionType; data: T | null };

type StateType<T> = {
  status: Status;
  data: T | null;
};
