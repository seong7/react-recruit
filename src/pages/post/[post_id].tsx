import React from 'react';
import { CenterTemplate } from '../../components/templates/CenterTemplate';
import { PostDetail } from '../../components/organisms/PostDetail';

const Post = () => {
  return <CenterTemplate content={<PostDetail />} />;
};

export default Post;
