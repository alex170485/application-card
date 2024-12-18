import { FC, ComponentPropsWithRef } from 'react';
import { CustomButton } from './styles.tsx';

type ApplicationCardButtonProps = {
  customLabel: string;
  isOpen: boolean;
} & ComponentPropsWithRef<'button'>;

export const ApplicationCardButton: FC<ApplicationCardButtonProps> = ({ customLabel, isOpen, ...rest }) => {
  return <CustomButton {...rest}>{customLabel}</CustomButton>;
};
