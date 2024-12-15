import { ReactNode } from 'react';
import { BoxWrapper, BoxWrapperPropsType } from './styles';

type BoxType = BoxWrapperPropsType & {
  children: ReactNode;
};

export const Box = (props: BoxType) => {
  const { children, ...restProps } = props;

  return <BoxWrapper {...restProps}>{children}</BoxWrapper>;
};
