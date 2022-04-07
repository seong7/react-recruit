import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseTemplate } from './';
import styled from '@emotion/styled';
import SideBarContextProvider from '../../../context/SideBar/SideBarContext';

export default {
  title: 'Template/BaseTemplate',
  component: BaseTemplate,
  argTypes: {
    content: { control: { disable: true } },
    navigation: { control: { disable: true } },
  },
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <SideBarContextProvider>
    <BaseTemplate {...args} />
  </SideBarContextProvider>
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
