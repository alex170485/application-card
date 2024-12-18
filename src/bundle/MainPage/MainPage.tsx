import { ApplicationCard } from '../../shared/ApplicationCard/ApplicationCard.tsx';
import { Wrapper } from './styles.tsx';
import fakeResponse from '../../data.json';
import { APPLICATION_STATUS_TITLE_MAP } from '../../shared/Status/const.ts';

export const MainPage = () => {
  return (
    <Wrapper>
      {fakeResponse?.map((item) => {
        const {
          id,
          application_number,
          creation_date,
          control_date,
          date_modified,
          system,
          application_data,
          application_coordinates,
          application_message,
          status,
          is_technical,
          attachment,
        } = item;

        return (
          <ApplicationCard
            key={id}
            application_number={application_number}
            creation_date={creation_date}
            control_date={control_date}
            date_modified={date_modified}
            system={system}
            application_data={application_data}
            application_coordinates={application_coordinates}
            application_message={application_message}
            status={status as keyof typeof APPLICATION_STATUS_TITLE_MAP}
            is_technical={!!is_technical}
            attachment={attachment}
          />
        );
      })}
    </Wrapper>
  );
};
