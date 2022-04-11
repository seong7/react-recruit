import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: { control: { type: 'text' } },
    size: {
      options: ['full', 'mid', 'fit'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  size: 'mid',
  color: 'primary',
  children: 'Button',
};
