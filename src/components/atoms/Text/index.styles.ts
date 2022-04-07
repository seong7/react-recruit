import styled from '@emotion/styled';
import { TextProps } from './index';

const Text = styled.span<Omit<TextProps, 'children' | 'as'>>`
  font-size: ${(props) => props.rem}rem;
  font-weight: ${(props) => props.weight};
`;

export default {
  Text,
};
