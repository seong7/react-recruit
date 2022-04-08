import React, {
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useRef,
} from 'react';
import { InputWrapper, StyledInput, StyledTextArea } from './index.styles';

export interface InputProps {
  rows?: number;
}

type InputHandle = {
  value: () => string;
};

export const Input = forwardRef<InputHandle, InputProps>(
  ({ rows = 1 }, ref) => {
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
          />
        ) : (
          <StyledInput ref={innerRef as MutableRefObject<HTMLInputElement>} />
        )}
      </InputWrapper>
    );
  },
);
