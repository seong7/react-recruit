import React from 'react';
import Styled from './index.styles';
import { JobPost } from '../../../types/common';

export type PostProps = Omit<JobPost, 'id'>;

export const Post = ({ title, created_at, applicants }: PostProps) => {
  return (
    <Styled.PostWrapper>
      <Styled.PostTitle>{title}</Styled.PostTitle>
      <Styled.PostTag>생성일: {created_at}</Styled.PostTag>
      <Styled.PostFooter>
        지원자 <span>{applicants}</span>
      </Styled.PostFooter>
    </Styled.PostWrapper>
  );
};
