import styled from 'styled-components';

export const Wrapper = styled.div<{ isActive: boolean }>`
  display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 16px;
    width: 328px;
    height: ${({ isActive }) => (isActive ? '400px' : '280px')};
    transition: all 0.5s;
    position: relative;
    overflow: hidden;

@media(max-width: 768px) {
    width: 100%
},
    
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #dbdbdb;
`;
