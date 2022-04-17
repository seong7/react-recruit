import { useMemo } from 'react';

export const useDebounce = <R, P>({
  callback,
  timeout,
}: UseDebounceProps<R, P>) => {
  const createDebounce = useMemo(
    () =>
      <R, P>(callFn: (props: P) => Promise<R>) => {
        let timer: NodeJS.Timer | undefined;
        let answer: R | undefined;

        return async (props: P): Promise<R | undefined> => {
          if (timer) {
            clearTimeout(timer);
          }

          await new Promise((resolve) => {
            timer = setTimeout(async () => {
              answer = await callFn(props);
              resolve(null);
            }, timeout);
          });
          return answer;
        };
      },
    [timeout],
  );

  return {
    debounceCaller: createDebounce(callback),
  };
};

export interface UseDebounceProps<R, P> {
  callback: (props: P) => Promise<R>;
  timeout: number;
}
