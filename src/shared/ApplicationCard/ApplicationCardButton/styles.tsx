import styled from 'styled-components';
import { RobotoMediumFont } from '../../../styles/typography.ts';

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  color: #e95721;
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  margin-inline: auto;
  cursor: pointer;
  ${RobotoMediumFont};
`;
