import { forwardRef, Ref } from 'react';
import { BodyWrapper, DescriptionBlock, DescriptionWrapper } from './styles.ts';
import { Row } from '../Row/Row.tsx';
import { Divider } from '../styles.tsx';

type BodyProps = {
  isActive: boolean;
  application_message: string;
  hasButton: boolean;
  createdDate: string;
  controlDate: string;
  modifiedDate: string;
  system: string;
  address: string;
  hasShowModifiedDate: boolean;
  duration: string | null
};

export const Body = forwardRef((props: BodyProps, ref: Ref<HTMLDivElement>) => {
  const {
    isActive,
    application_message,
    hasButton,
    createdDate,
    controlDate,
    modifiedDate,
    system,
    address,
    hasShowModifiedDate,
    duration
  } = props;

  return (
    <BodyWrapper>
      <Row title='Создана' message={hasShowModifiedDate ? `${createdDate} ${duration}` : createdDate } />
      <Row
        title={hasShowModifiedDate ? 'Выполнена' : 'Контроль'}
        message={hasShowModifiedDate ? controlDate : modifiedDate}
      />
      <Row title='Система' message={system} />
      <Row title='Объект' message={address} />
      <Divider />
      <DescriptionWrapper ref={ref}>
        <DescriptionBlock isActive={isActive} hasButton={hasButton}>
          {application_message}
        </DescriptionBlock>
      </DescriptionWrapper>
    </BodyWrapper>
  );
});
