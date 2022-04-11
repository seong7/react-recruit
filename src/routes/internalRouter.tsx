import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useInternalRouter = () => {
  const router = useRouter();
  return useMemo(() => {
    return {
      ...router,
      goBack() {
        router.back();
      },
      push(path: RoutePath) {
        router.push(path);
      },
      replace(path: RoutePath) {
        router.replace(path);
      },
    };
  }, [router]);
};

export type RoutePath = '/' | `/post/${number}` | '/create';
