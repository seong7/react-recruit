import React from 'react';
import { PostTag, PostTitle, PostWrapper, PostFooter } from './index.styles';
import { JobPost } from '../../../types/common';

export type PostProps = Omit<JobPost, 'id'>;

export const Post = ({ title, created_at, applicants }: PostProps) => {
  return (
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <PostTag>생성일: {created_at}</PostTag>
      <PostFooter>
        지원자 <span>{applicants}</span>
      </PostFooter>
    </PostWrapper>
  );
};
