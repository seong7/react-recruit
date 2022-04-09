import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'span'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'TEST text',
  as: 'span',
  rem: 1.6,
  weight: 300,
  color: 'inherit',
};
