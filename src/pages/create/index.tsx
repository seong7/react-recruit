import React from 'react';
import { NextPage } from 'next';
import { CenterTemplate } from '../../components/templates/CenterTemplate';
import { PostForm } from '../../components/organisms/PostForm';

const Create: NextPage = () => {
  return <CenterTemplate content={<PostForm />} />;
};

export default Create;
