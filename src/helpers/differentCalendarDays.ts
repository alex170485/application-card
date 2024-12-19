import { differenceInCalendarDays, parseISO } from 'date-fns';

export const differentCalendarDays = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return null;

  const differentCalendarDays = differenceInCalendarDays(parseISO(startDate), parseISO(endDate));

  if (differentCalendarDays === 1) {
    return `(${differentCalendarDays} день)`
  }

  if (differentCalendarDays > 2 && differentCalendarDays < 5) {
    return `(${differentCalendarDays} дня)`
  }

  if(differentCalendarDays > 4) {
    return `(${differentCalendarDays} дней)`
  }

  return ''

};
