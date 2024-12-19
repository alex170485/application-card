import { format } from 'date-fns';

export const timeFormatter = (date: string, timeFormat = 'HH:mm') => {
  if (!date) return;

  return format(date, timeFormat);
};
