import { FC } from 'react';
import { Box } from '../../Box/Box.tsx';
import {InfoBlock, TitleBlock} from "../styles.tsx";

type RowPropsType = {
  title: string;
  message: string;
};

export const Row: FC<RowPropsType> = ({ title, message }) => {
  return (
    <Box width='100%' display='flex' columnGap='32px' justifyContent='space-between' zIndex={1}>
      <TitleBlock>{`${title}:`}</TitleBlock>
      <InfoBlock>{message}</InfoBlock>
    </Box>
  );
};
