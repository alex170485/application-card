import { FC } from 'react';
import { Box } from '../../Box/Box.tsx';

type RowPropsType = {
  title: string;
  message: string;
};

export const Row: FC<RowPropsType> = ({ title, message }) => {
  return (
    <Box width='100%' display='flex' columnGap='32px' justifyContent='space-between'>
      <Box width='25%'>{title}</Box>
      <Box width='75%'>{message}</Box>
    </Box>
  );
};
