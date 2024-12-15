import { FC } from 'react';
import { Status } from '../../Status/Status.tsx';
import { Box } from '../../Box/Box.tsx';
import { APPLICATION_STATUS_TITLE_MAP } from '../../Status/const.ts';
import { Title } from './styles.tsx';

type HeaderPropsType = {
  status: string;
};

export const Header: FC<HeaderPropsType> = ({ status }) => {
  const title = APPLICATION_STATUS_TITLE_MAP[status];

  return (
    <Box display='flex' alignItems='center' columnGap='8px'>
      <Status status={status}>2323232</Status>
      <Title>{title}</Title>
    </Box>
  );
};
