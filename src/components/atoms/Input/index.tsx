import React, {
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  useImperativeHandle,
  useRef,
} from 'react';
import { InputWrapper, StyledInput, StyledTextArea } from './index.styles';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  rows?: number;
  label?: string;
}

type InputHandle = {
  value: () => string;
};

export const Input = forwardRef<InputHandle, InputProps>(
  ({ rows = 1, label, ...rest }, ref) => {
    const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
      null,
    );

    useImperativeHandle(ref, () => ({
      value() {
        return innerRef.current?.value ?? '';
      },
    }));

    return (
      <InputWrapper>
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
  },
);
