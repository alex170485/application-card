import {GearIconWrapper, Wrapper} from './styles.tsx';
import { Header } from './Header/Header.tsx';
import { Body } from './Body/Body.tsx';
import { FC, useEffect, useRef, useState } from 'react';
import { APPLICATION_STATUS_TITLE_MAP } from '../Status/const.ts';
import { ApplicationCardButton } from './ApplicationCardButton/ApplicationCardButton.tsx';
import { formatNumber } from '../../helpers/formatNumber.ts';
import { dateFormatter } from '../../helpers/dateFormatter.ts';
import { timeFormatter } from '../../helpers/timeFormatter.ts';
import {differentCalendarDays} from "../../helpers/differentCalendarDays.ts";
import GearIcon from '../../assets/GearIcon.svg'

type ApplicationCardProps = {
  application_number: string;
  creation_date: string;
  control_date: string;
  date_modified: string;
  system: {
    type: string;
    number: string;
  };
  application_coordinates: {
    type: string;
    city: string;
    address: string;
  };
  application_message: string;
  status: keyof typeof APPLICATION_STATUS_TITLE_MAP;
  is_technical: string;
  attachment: string;
};

export const ApplicationCard: FC<ApplicationCardProps> = ({
  application_number,
  creation_date,
  control_date,
  date_modified,
  system,
  application_coordinates,
  application_message,
  is_technical,
  status,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [hasButton, setHasButton] = useState(false);

  const buttonLabel = isOpen ? 'Свернуть' : 'Читать далее';
  const buttonHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setHasButton(ref?.current?.clientHeight > 51);
    }
  }, [ref]);

  const applicationNumber = formatNumber(application_number);
  const creationDate = dateFormatter(creation_date);
  const controlDate = dateFormatter(control_date);
  const modifiedDate = dateFormatter(date_modified);

  const creationDateTime = timeFormatter(creation_date);
  const controlDateTime = timeFormatter(control_date);
  const modifiedDateTime = timeFormatter(date_modified);

  const systemInfo = `${system.type} | ${system.number}`;
  const currentAddress = `${application_coordinates.type}, ${application_coordinates.city}, ${application_coordinates.address}`;

  const isCompleted = status === 'completed';
  const isHaveReview = status === 'have_review';
  const duration = differentCalendarDays(date_modified, creation_date);

  const pattern = new RegExp("true");
  const isTechnical = pattern.test(is_technical)

  return (
    <Wrapper isActive={isOpen}>
      {isTechnical && <GearIconWrapper><GearIcon/></GearIconWrapper>}
      <Header status={status} applicationNumber={applicationNumber} />
      <Body
        ref={ref}
        isActive={isOpen}
        application_message={application_message}
        hasButton={hasButton}
        createdDate={`${creationDate} ${creationDateTime}`}
        controlDate={`${controlDate} ${controlDateTime}`}
        modifiedDate={`${modifiedDate} ${modifiedDateTime}  `}
        system={systemInfo}
        address={currentAddress}
        hasShowModifiedDate={isCompleted || isHaveReview}
        duration={duration}
      />
      {hasButton && <ApplicationCardButton customLabel={buttonLabel} onClick={buttonHandler} isOpen={isOpen} />}
    </Wrapper>
  );
};
