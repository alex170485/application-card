import { ContentWrapper, LayoutWrapper } from './styles.tsx';
import { FC, ReactNode } from 'react';

type LayoutPropsType = {
  children: ReactNode;
};

export const Layout: FC<LayoutPropsType> = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};
