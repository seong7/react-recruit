import React, { ChangeEvent, useCallback } from 'react';
import { Wrapper } from './index.styles';
import { Input } from '../../../atoms/Input';
import { useDebounce } from '../../../../hooks/useDebounce';
import { postAPI } from '../../../../api/postAPI';
import { usePost } from '../../../../context/Post/hook';

export const PostSearch = () => {
  const { setPosts } = usePost();

  const { debounceCaller } = useDebounce({
    callback: postAPI.searchPosts,
    timeout: 500,
  });

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const result = await debounceCaller(e.target.value);
      result && setPosts(result.data);
    },
    [debounceCaller, setPosts],
  );

  return (
    <Wrapper>
      <Input
        onChange={handleChange}
        placeholder={'Search Post   (debouncing implemented..!)'}
      />
    </Wrapper>
  );
};
