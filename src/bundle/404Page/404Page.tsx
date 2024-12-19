import { Box } from '../../shared/Box/Box.tsx';
import errorImagePath from './images/404.jpg';

export const ErrorPage = () => {
  return (
    <Box width='100%'>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <img src={errorImagePath} alt='404Page' style={{ width: '100%' }} />
      </Box>
    </Box>
  );
};
