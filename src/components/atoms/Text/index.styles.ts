import styled from '@emotion/styled';
import { TextProps } from './index';

export const TextWrapper = styled.span<
  Omit<TextProps, 'children' | 'as' | 'color'>
>`
  font-size: ${(props) => (props.rem ? `${props.rem}rem` : 'inherit')};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  white-space: pre-line;
`;
