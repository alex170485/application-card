import styled from 'styled-components';
import { RobotoMediumFont } from '../../styles/typography.ts';

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

export const TitleBlock = styled.div`
  width: 100%;
  max-width: 20%;
  color: #444444;
  ${RobotoMediumFont};
  font-size: 14px;
`;

export const InfoBlock = styled.div`
  width: 80%;
  color: #222222;
  ${RobotoMediumFont};
  font-size: 14px;
`;

export const GearIconWrapper = styled.div`
  position: absolute;
  right: 2px;
  top: 4px;  
`
