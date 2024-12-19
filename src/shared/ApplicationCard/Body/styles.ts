import styled from 'styled-components';
import { RobotoRegularFont } from '../../../styles/typography.ts';

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 8px 16px;
  position: relative;
`;

export const DescriptionWrapper = styled.div`
  color: #444444;
`;

export const DescriptionBlock = styled.div<{ isActive: boolean; hasButton: boolean }>`
  display: flex;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ hasButton, isActive }) => (hasButton && !isActive ? '50px' : `auto`)};
  font-size: 14px;
  ${RobotoRegularFont};
  font-weight: 400;

  ${({ isActive, hasButton }) =>
    !isActive &&
    hasButton &&
    `
    &::before {
        content:'';
        width:100%;
        height:100px;
        position:absolute;
        left:0;
        bottom:0;
          background: linear-gradient(to bottom, transparent, white);
        }
    `}
`;
