import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  rows: 1,
};
