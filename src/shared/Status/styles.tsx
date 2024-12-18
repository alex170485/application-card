import styled from 'styled-components';

export const Wrapper = styled.div<{ status: any }>`
  width: 103px;
  display: flex;
  justify-content: center;
  background-color: ${({ status }) => status};
  padding: 8px 16px;
  border-bottom-right-radius: 16px;
  color: #fff;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;
