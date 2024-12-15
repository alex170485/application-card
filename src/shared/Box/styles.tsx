import { CSSProperties, HTMLAttributes } from 'react';
import { boxStyles } from './boxHelpers';
import styled from 'styled-components';

export type SpacingPropsType = {
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  m?: string | string[];
};

export type BoxWrapperPropsType = HTMLAttributes<HTMLDivElement> &
  SpacingPropsType & {
    display?: CSSProperties['display'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    flexDirection?: CSSProperties['flexDirection'];
    flexWrap?: CSSProperties['flexWrap'];
    rowGap?: CSSProperties['rowGap'];
    columnGap?: CSSProperties['columnGap'];
    width?: CSSProperties['width'];
    position?: CSSProperties['position'];
    height?: CSSProperties['height'];
    cursor?: CSSProperties['cursor'];
    textAlign?: CSSProperties['textAlign'];
    zIndex?: CSSProperties['zIndex'];
    focusable?: boolean;
  };

export const BoxWrapper = styled('div')<BoxWrapperPropsType>(boxStyles);
