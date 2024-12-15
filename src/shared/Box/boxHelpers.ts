import { BoxWrapperPropsType, SpacingPropsType } from './styles';
import { CSSObject } from 'styled-components';

const getSpacingStyles = ({ mt, mr, mb, ml, m }: SpacingPropsType) => {
  // When <m> is defined it gets highest priority to parse, otherwise parse partial margins
  if (m) {
    if (Array.isArray(m)) {
      return { margin: m.join(' ') };
    } else {
      return { margin: m };
    }
  }
  return {
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
  };
};

const getDisplayStyles = ({ display, justifyContent, alignItems, flexDirection }: BoxWrapperPropsType) => {
  if (display) return display;

  return justifyContent || alignItems || flexDirection ? 'flex' : display;
};

export const boxStyles = (props: BoxWrapperPropsType): CSSObject => {
  const {
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    rowGap,
    columnGap,
    width,
    position,
    height,
    cursor,
    textAlign,
    zIndex,
  } = props;
  const displayStyle = getDisplayStyles(props);
  const spacingStyles = getSpacingStyles(props);

  return {
    display: displayStyle,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    rowGap,
    columnGap,
    width,
    position,
    height,
    cursor,
    textAlign,
    zIndex,
    ...spacingStyles,
  };
};
