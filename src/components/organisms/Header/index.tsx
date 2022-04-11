import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { ArrowLeftIcon, MenuIcon } from '../../../assets';
import { HeaderTop, HeaderWrapper } from './index.styles';
import { postAPI } from '../../../api/postAPI';
import { JobPost } from '../../../types/common';
import { useInternalRouter } from '../../../routes/internalRouter';

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

  const { replace, asPath } = useInternalRouter();

  const handleClickDelete = async () => {
    const result = confirm('공고를 삭제하시겠습니까?');
    if (result) {
      const postId: JobPost['id'] = Number(asPath.split('/')[2]);
      await postAPI.deletePost(postId);
      replace('/');
    }
  };

  return (
    <HeaderWrapper>
      <HeaderTop>
        <Button size={'fit'} color={'secondary'} onClick={onHeaderButtonClick}>
          {icon}
        </Button>
        {headerTitle === '공고 보기' && (
          <Button color={'primary'} onClick={handleClickDelete}>
            삭제
          </Button>
        )}
      </HeaderTop>
      <Text as={'h1'} rem={2.4} weight={500}>
        {headerTitle}
      </Text>
    </HeaderWrapper>
  );
};
