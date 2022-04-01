import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Test } from './Test';

export default {
  title: 'Test',
  component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: '',
};
