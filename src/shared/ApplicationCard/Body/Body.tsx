import { FC } from 'react';
import { BodyWrapper, DescriptionBlock } from './styles.ts';
import { Row } from '../Row/Row.tsx';
import { Divider } from '../styles.tsx';

type BodyProps = {
  isOpen: boolean;
};

export const Body: FC<BodyProps> = ({ isOpen }) => {
  return (
    <BodyWrapper>
      <Row title='Создана' message={'efoiuher'} />
      <Row title='Контроль' message={'roiejh'} />
      <Row title='Система' message={'aeiubfh'} />
      <Row title='Объект' message={'aiuefh'} />
      <Divider />
      <DescriptionBlock isActive={isOpen}>
        После осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка виде списка
        После осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка виде
        спискаПосле осуществления поиска, внизу под поисковыми полями отображаются результаты поиска в виде списка виде
        спискаПосле осуществления поиска, внизу под поисковыми полями
      </DescriptionBlock>
    </BodyWrapper>
  );
};
