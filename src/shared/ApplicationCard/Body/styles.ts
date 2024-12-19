import styled from 'styled-components';
import {RobotoRegularFont} from "../../../styles/typography.ts";

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 8px 16px;
  position: relative;
`;

export const DescriptionWrapper = styled.div`
    color: #444444
`

export const DescriptionBlock = styled.div<{ isActive: boolean }>`
  display: flex;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ isActive }) => (isActive ? 'auto' : '90px')};
  font-size: 14px;
    ${RobotoRegularFont};
    font-weight: 400;
    
    ${({ isActive }) =>
    !isActive &&
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
