import React from 'react';
import { PostFormWrapper, Form, FormInputWrapper } from './index.styles';
import { Header } from '../Header';
import { useInternalRouter } from '../../../routes/internalRouter';
import { useForm } from '../../../hooks/useForm';
import { useAsync } from '../../../hooks/useAsync';
import { postAPI } from '../../../api/postAPI';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { AppRegExp } from '../../../constants/regexp';
import {
  POST_DESCRIPTION_VALIDATION,
  POST_TITLE_VALIDATION,
} from '../../../constants/validationMessage';

export const PostForm = () => {
  const { goBack, replace } = useInternalRouter();

  const { register, handleSubmit, getValues, errors } = useForm<
    'title' | 'description'
  >();

  const { fetch: addPost } = useAsync({
    callback: async () => {
      await postAPI.addPost({
        title: getValues().title,
        description: getValues().description,
      });
      replace('/');
    },
  });

  return (
    <PostFormWrapper>
      <Header onHeaderButtonClick={goBack} headerTitle={'새 공고 작성'} />
      <Form onSubmit={handleSubmit(addPost)}>
        <FormInputWrapper>
          <Input
            label={'제목'}
            {...register('title', {
              required: true,
              pattern: AppRegExp.custom2,
              maxLength: 15,
            })}
            error={{
              hasError: errors.title,
              errorMessage: POST_TITLE_VALIDATION,
            }}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <Input
            label={'상세정보'}
            rows={10}
            {...register('description', {
              minLength: 10,
            })}
            error={{
              hasError: errors.description,
              errorMessage: POST_DESCRIPTION_VALIDATION,
            }}
          />
        </FormInputWrapper>
        <Button type={'submit'} size={'full'} color={'primary'}>
          <Text rem={1.7} weight={400}>
            추가
          </Text>
        </Button>
      </Form>
    </PostFormWrapper>
  );
};
