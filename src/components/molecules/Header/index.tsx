import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { ArrowLeftIcon, MenuIcon } from '../../../assets';
import { HeaderWrapper } from './index.styles';

export interface HeaderProps {
  onHeaderButtonClick: () => void;
  headerTitle: '공고 리스트' | '새 공고 작성' | '공고 보기';
}

export const Header = ({ headerTitle, onHeaderButtonClick }: HeaderProps) => {
  let icon;
  switch (headerTitle) {
    case '공고 리스트':
      icon = <MenuIcon height={'17px'} />;
      break;
    case '새 공고 작성':
      icon = <ArrowLeftIcon />;
      break;
    case '공고 보기':
      icon = <ArrowLeftIcon />;
      break;
    default:
      icon = <></>;
  }

  return (
    <HeaderWrapper>
      <Button size={'fit'} color={'secondary'} onClick={onHeaderButtonClick}>
        {icon}
      </Button>
      <Text as={'h1'} rem={2.4} weight={500}>
        {headerTitle}
      </Text>
    </HeaderWrapper>
  );
};
