import styled from '@emotion/styled';
import { ButtonProps } from './index';

export const ButtonWrapper = styled.button<Pick<ButtonProps, 'size' | 'color'>>(
  (props) => {
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
      case 'full':
        WidthVariant.width = '100%';
        break;
      case 'mid':
        WidthVariant.width = '100px';
        break;
      case 'fit':
        WidthVariant.width = 'fit-content';
        break;
    }

    const ColorVariant = {
      color: '',
      background: '',
    };
    switch (props.color) {
      case 'primary':
        ColorVariant.color = '#fff';
        ColorVariant.background = '#3a99ff';
        break;
      case 'secondary':
        ColorVariant.color = 'inherit';
        ColorVariant.background = '#efefef';
    }

    return { ...baseStyle, ...WidthVariant, ...ColorVariant };
  },
);
