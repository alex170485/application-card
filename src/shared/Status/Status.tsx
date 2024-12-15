import { APPLICATION_STATUS_MAP } from './const.ts';
import { FC, ReactNode } from 'react';
import { Wrapper } from './styles.tsx';

type StatusProps = {
  status: keyof typeof APPLICATION_STATUS_MAP;
  children: ReactNode;
};

export const Status: FC<StatusProps> = ({ status, children }) => {
  const currentBackground = APPLICATION_STATUS_MAP[status];

  return <Wrapper status={currentBackground}>{children}</Wrapper>;
};
