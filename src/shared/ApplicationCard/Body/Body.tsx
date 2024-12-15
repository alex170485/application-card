import { FC } from 'react';
import { BodyWrapper, DescriptionBlock } from './styles.ts';
import { Row } from '../Row/Row.tsx';
import { ApplicationCardButton } from '../ApplicationCardButton/ApplicationCardButton.tsx';

type BodyProps = {
  isOpen: boolean;
  onClick: () => void;
  customButtonLabel: string;
};

export const Body: FC<BodyProps> = ({ isOpen, onClick, customButtonLabel }) => {
  return (
    <BodyWrapper>
      <Row title='Создана' message={'efoiuher'} />
      <Row title='Контроль' message={'roiejh'} />
      <Row title='Система' message={'aeiubfh'} />
      <Row title='Объект' message={'aiuefh'} />
      <DescriptionBlock>
        regijoerijgorjigregoiherjioughruidhgiudhriughdsriughisdruhgiusdhrgiusdhriughsdriuhgisdruhigurhiguhdisughsiuhgisuhgiushdriughsdrighisdrhgidrh
      </DescriptionBlock>
      <ApplicationCardButton customLabel={customButtonLabel} onClick={onClick} isOpen={isOpen} />
    </BodyWrapper>
  );
};
