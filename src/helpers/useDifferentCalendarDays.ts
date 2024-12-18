import { differenceInCalendarDays, parseISO } from 'date-fns';

export const useDifferentCalendarDays = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return null;

  const differentCalendarDays = differenceInCalendarDays(parseISO(startDate), parseISO(endDate));
};
