import React, { useEffect } from 'react';
import { Wrapper, PostDetailWrapper, FieldWrapper } from './index.styles';
import { PostTag } from '../../molecules/Post/index.styles';
import { Header } from '../../molecules/Header';
import { useInternalRouter } from '../../../routes/internalRouter';
import { usePost } from '../../../context/Post/hook';
import { Text } from '../../atoms/Text';

export const PostDetail = () => {
  const { goBack, push, query } = useInternalRouter();
  const { getPostById } = usePost();

  const post = getPostById(Number((query as { post_id: string }).post_id));

  useEffect(() => {
    if (post === undefined) push('/');
  });

  return (
    <>
      {post !== undefined && (
        <Wrapper>
          <Header onHeaderButtonClick={goBack} headerTitle={'공고 보기'} />
          <PostDetailWrapper>
            <FieldWrapper>
              <PostTag>생성일: {post.created_at}</PostTag>
            </FieldWrapper>
            <FieldWrapper>
              <Text as={'h2'} rem={2} weight={500}>
                {post.title}
              </Text>
            </FieldWrapper>
            <FieldWrapper>
              <Text rem={1.7}>{post.description}</Text>
            </FieldWrapper>
          </PostDetailWrapper>
        </Wrapper>
      )}
    </>
  );
};
