import React, {
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  InputWrapper,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledErrorMessage,
} from './index.styles';
import { Text } from '../Text';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  rows?: number;
  label?: string;
  error?: InputError;
}

export const Input = forwardRef<InputHandle, InputProps>(
  ({ rows = 1, label, error, ...rest }, ref) => {
    const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
      null,
    );

    useImperativeHandle(ref, () => ({
      value() {
        return innerRef.current?.value ?? '';
      },
    }));

    let input = (
      <InputWrapper error={error}>
        {rows > 1 ? (
          <StyledTextArea
            ref={innerRef as MutableRefObject<HTMLTextAreaElement>}
            rows={rows}
            {...rest}
          />
        ) : (
          <StyledInput
            ref={innerRef as MutableRefObject<HTMLInputElement>}
            {...rest}
          />
        )}
      </InputWrapper>
    );

    if (label !== undefined) {
      input = (
        <StyledLabel>
          <Text rem={1.8} weight={400}>
            {label}
          </Text>
          {input}
        </StyledLabel>
      );
    }

    if (error && error.hasError && error.errorMessage) {
      input = (
        <>
          {input}
          <StyledErrorMessage>
            <Text color={'#f00'} rem={1.2} weight={400}>
              {error.errorMessage}
            </Text>
          </StyledErrorMessage>
        </>
      );
    }

    return input;
  },
);

type InputHandle = {
  value: () => string;
};

type InputError = {
  hasError: boolean;
  errorMessage?: string;
};
