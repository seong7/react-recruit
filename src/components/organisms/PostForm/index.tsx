import React from 'react';
import { PostFormWrapper, Form } from './index.styles';
import { Header } from '../../molecules/Header';
import { useInternalRouter } from '../../../routes/internalRouter';
import { useForm } from '../../../hooks/useForm';
import { useAsync } from '../../../hooks/useAsync';
import { postAPI } from '../../../api/postAPI';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { AppRegExp } from '../../../constants/regexp';

export const PostForm = () => {
  const { goBack, replace } = useInternalRouter();

  const { register, handleSubmit, getValues, errors } = useForm<
    'title' | 'desc'
  >();

  const { fetch: addPost } = useAsync({
    callback: async () => {
      await postAPI.addPost({
        title: getValues().title,
        description: getValues().desc,
      });
      replace('/');
    },
  });

  return (
    <PostFormWrapper>
      <Header onHeaderButtonClick={goBack} headerTitle={'새 공고 작성'} />
      <Form onSubmit={handleSubmit(addPost)}>
        <Input
          {...register('title', {
            required: true,
            pattern: AppRegExp.email,
          })}
        />
        <div>{errors.title && 'TTT'}</div>
        <Input {...register('desc')} rows={10} />
        <Button type={'submit'}>
          <Text rem={1.5}>추가</Text>
        </Button>
      </Form>
    </PostFormWrapper>
  );
};
