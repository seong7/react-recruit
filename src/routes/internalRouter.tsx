import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useInternalRouter = () => {
  const router = useRouter();
  return useMemo(() => {
    return {
      goBack() {
        router.back();
      },
      push(path: RoutePath) {
        router.push(path);
      },
    };
  }, [router]);
};

export type RoutePath = `/post/${number}` | '/create';
