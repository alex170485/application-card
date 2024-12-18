import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 8px 16px;
  position: relative;
`;

export const DescriptionBlock = styled.div<{ isActive: boolean }>`
  display: flex;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ isActive }) => (isActive ? 'auto' : '90px')};
  font-size: 14px;

  ${({ isActive }) =>
    !isActive &&
    `
    &::before {
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        background:linear-gradient(transparent 10px, white);
        }
    `}
`;
