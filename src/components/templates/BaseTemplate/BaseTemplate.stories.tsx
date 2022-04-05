import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseTemplate } from './';
import styled from '@emotion/styled';

export default {
  title: 'Template/BaseTemplate',
  component: BaseTemplate,
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

const StyledNav = styled.nav`
  height: 100%;
  width: 100%;
  background: darkgoldenrod;
`;

const StyledContent = styled.main`
  height: 100%;
  width: 100%;
  background: cadetblue;
`;

export const Basic = Template.bind({});

Basic.args = {
  navigation: <StyledNav>navigation</StyledNav>,
  content: <StyledContent>content</StyledContent>,
};
