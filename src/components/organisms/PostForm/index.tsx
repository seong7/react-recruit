import React from 'react';
import { PostFormWrapper, Form } from './index.styles';
import { Header } from '../../molecules/Header';
import { useInternalRouter } from '../../../routes/internalRouter';

export const PostForm = () => {
  const { goBack } = useInternalRouter();
  return (
    <PostFormWrapper>
      <Header onHeaderButtonClick={goBack} headerTitle={'새 공고 작성'} />
      <Form>
        <div>TEST</div>
        <div>test</div>
      </Form>
    </PostFormWrapper>
  );
};
