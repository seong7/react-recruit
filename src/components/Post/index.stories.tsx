import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Post } from './';

export default {
  title: 'Components/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: 'Junior Frontend',
  created_at: '2022-04-01',
  applicants: 3,
};
