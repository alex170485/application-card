import { FC, ComponentPropsWithRef } from 'react';
import { CustomButton } from './styles.tsx';

type ApplicationCardButtonProps = {
  customLabel: string;
  isOpen: string;
} & ComponentPropsWithRef<'button'>;

export const ApplicationCardButton: FC<ApplicationCardButtonProps> = ({ customLabel, ...rest }) => {
  return <CustomButton {...rest}>{customLabel}</CustomButton>;
};
