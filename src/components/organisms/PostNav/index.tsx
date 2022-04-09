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
import { useInternalRouter } from '../../../routes/internalRouter';

export const PostNav = () => {
  const { posts } = usePost();
  const { push } = useInternalRouter();

  return (
    <PostNavWrapper>
      <WorkspaceWrapper>
        <Text rem={2} weight={400}>
          My Workspace
        </Text>
      </WorkspaceWrapper>

      <NavWrapper>
        <InternalLink href={'/'}>
          <NavTitle>
            <Text rem={1.5} weight={400}>
              공고 리스트
            </Text>
            <Button size={'fit'} onClick={() => push('/create')}>
              +
            </Button>
          </NavTitle>
        </InternalLink>

        <NavContentWrapper>
          {posts.map((post) => (
            <InternalLink key={post.id} href={`/post/${post.id}`}>
              <NavContent>
                <Text rem={1.5} weight={400}>
                  {post.title}
                </Text>
              </NavContent>
            </InternalLink>
          ))}
        </NavContentWrapper>
      </NavWrapper>
    </PostNavWrapper>
  );
};
