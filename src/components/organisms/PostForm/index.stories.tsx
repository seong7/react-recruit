import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PostForm } from './';

export default {
  title: 'Organisms/PostForm',
  component: PostForm,
} as ComponentMeta<typeof PostForm>;

const Template: ComponentStory<typeof PostForm> = () => <PostForm />;

export const Basic = Template.bind({});
