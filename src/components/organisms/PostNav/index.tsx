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

export const PostNav = () => {
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
          <NavContent>
            <InternalLink href={'/post/1'}>
              <Text rem={1.5} weight={400}>
                TEST
              </Text>
            </InternalLink>
          </NavContent>
        </NavContentWrapper>
      </NavWrapper>
    </PostNavWrapper>
  );
};
