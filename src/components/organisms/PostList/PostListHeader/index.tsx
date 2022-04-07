import React from 'react';
import Styled from './index.styles';
import { Text } from '../../../atoms/Text';
import { Button } from '../../../atoms/Button';
import { MenuIcon } from '../../../../assets';
import { useSideBarState } from '../../../../context/SideBar/hook';

export interface PostListHeaderProps {}

export const PostListHeader = ({}: PostListHeaderProps) => {
  const { toggleSideBar } = useSideBarState();
  return (
    <Styled.ListHeaderWrapper>
      <Button size={'fit'} onClick={toggleSideBar}>
        <MenuIcon height={'17px'} />
      </Button>
      <Styled.PostListTitle>
        <Text as={'h1'} rem={2.4} weight={500}>
          공고 리스트
        </Text>
      </Styled.PostListTitle>
    </Styled.ListHeaderWrapper>
  );
};
