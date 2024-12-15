import styled from 'styled-components';

export const Wrapper = styled.div<{ status: any }>`
  display: flex;
  background-color: ${({ status }) => status};
  padding: 8px 16px;
  border-bottom-right-radius: 16px;
  color: #fff;
  font-weight: 500;
`;
