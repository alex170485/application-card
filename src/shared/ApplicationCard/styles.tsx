import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  borderRadius: '16px',
  width: '328px',
  height: '280px',
  overflow: 'hidden',

  '@media(max-width: 768px)': {
    width: '100%',
  },
});
