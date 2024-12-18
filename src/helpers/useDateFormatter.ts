import { format } from 'date-fns';

export const useDateFormatter = (date: string, dateFormat = 'dd.MM.yy', timeFormat = 'HH:mm') => {
  if (!date) return '-';

  const formattedDate = format(date, dateFormat); // Example date format
  const formattedTime = format(date, timeFormat);

  console.log('111', formattedTime);

  return {
    formattedDate,
    formattedTime,
  };
};
