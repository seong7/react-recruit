import styled from '@emotion/styled';
import { ButtonProps } from './index';

const ButtonWrapper = styled.button<Pick<ButtonProps, 'size'>>((props) => {
  const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '36px',
    padding: '0 12px',
    borderRadius: '8px',
    fontSize: '1.5rem',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const WidthVariant = {
    width: '',
  };
  switch (props.size) {
    case 'large':
      WidthVariant.width = '200px';
      break;
    case 'mid':
      WidthVariant.width = '100px';
      break;
    case 'fit':
      WidthVariant.width = 'fit-content';
      break;
  }

  return { ...baseStyle, ...WidthVariant };
});

export default {
  ButtonWrapper,
};
