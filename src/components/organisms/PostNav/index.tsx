import React from 'react';
import {
  PostNavWrapper,
  WorkspaceWrapper,
  NavWrapper,
  NavTitle,
  NavContentWrapper,
  NavContent,
} from './index.styles';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { InternalLink } from '../../../routes/InternalLink';
import { usePost } from '../../../context/Post/hook';

export const PostNav = () => {
  const { posts } = usePost();
  return (
    <PostNavWrapper>
      <WorkspaceWrapper>
        <Text rem={2} weight={400}>
          My Workspace
        </Text>
      </WorkspaceWrapper>
      <NavWrapper>
        <NavTitle>
          <Text rem={1.5} weight={400}>
            공고 리스트
          </Text>
          <Button size={'fit'}>+</Button>
        </NavTitle>
        <NavContentWrapper>
          {posts.map((post) => (
            <NavContent key={post.id}>
              <InternalLink href={`/post/${post.id}`}>
                <Text rem={1.5} weight={400}>
                  {post.title}
                </Text>
              </InternalLink>
            </NavContent>
          ))}
        </NavContentWrapper>
      </NavWrapper>
    </PostNavWrapper>
  );
};
