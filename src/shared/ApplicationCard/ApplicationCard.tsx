import { Wrapper } from './styles.tsx';
import { Header } from './Header/Header.tsx';
import { Body } from './Body/Body.tsx';
import { FC, useState } from 'react';

type ApplicationCardProps = {
  application_number: string;
  creation_date: string;
  control_date: string;
  date_modified: string;
  system: string;
  application_data: string;
  application_coordinates: {
    type: string;
    city: string;
    address: string;
  };
  application_message: string;
  status: string;
  is_technical: boolean;
  attachment: string;
};

export const ApplicationCard: FC<ApplicationCardProps> = ({
  application_number,
  creation_date,
  control_date,
  date_modified,
  system,
  application_data,
  application_coordinates,
  application_message,
  is_technical,
  attachment,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonLabel = isOpen ? 'Свернуть' : 'Читать далее';
  const buttonHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Header status={status}/>
      <Body customButtonLabel={buttonLabel} isOpen={isOpen} onClick={buttonHandler} />
    </Wrapper>
  );
};
