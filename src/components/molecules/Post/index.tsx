import React from 'react';
import { PostTag, PostTitle, PostWrapper, PostFooter } from './index.styles';
import { JobPost } from '../../../types/common';
import { Text } from '../../atoms/Text';

export type PostProps = Omit<JobPost, 'id'>;

export const Post = ({ title, created_at, applicants }: PostProps) => {
  return (
    <PostWrapper>
      <PostTitle>
        <Text rem={1.8} weight={400} as={'h3'}>
          {title}
        </Text>
      </PostTitle>
      <PostTag>생성일: {created_at}</PostTag>
      <PostFooter>
        지원자 <span>{applicants}</span>
      </PostFooter>
    </PostWrapper>
  );
};
