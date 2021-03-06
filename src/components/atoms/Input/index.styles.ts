import styled from '@emotion/styled';
import { InputProps } from './index';

export const InputWrapper = styled.div<Pick<InputProps, 'error'>>`
  display: flex;
  justify-content: center;
  border: 1px solid
    ${({ error }) => (error && error.hasError ? '#f00' : '#686868')};
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  height: calc(12px + 12px + 20px);
`;

export const StyledTextArea = styled.textarea<Pick<InputProps, 'rows'>>`
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  height: ${({ rows }) => `calc(12px + 12px + (20px * ${rows || 1}))`};
`;

export const StyledErrorMessage = styled.p`
  padding-top: 4px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
