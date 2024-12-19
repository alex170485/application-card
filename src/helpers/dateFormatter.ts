import { format } from 'date-fns';

export const dateFormatter = (date: string, dateFormat = 'dd.MM.yy') => {
  if (!date) return '-';

  return format(date, dateFormat);
};
