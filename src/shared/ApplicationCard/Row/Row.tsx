import { FC } from 'react';
import { Box } from '../../Box/Box.tsx';

type RowPropsType = {
  title: string;
  message: string;
};

export const Row: FC<RowPropsType> = ({ title, message }) => {
  return (
    <Box display='flex' columnGap='32px'>
      {title}
      {message}
    </Box>
  );
};
