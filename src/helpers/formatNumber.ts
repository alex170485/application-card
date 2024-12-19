export const formatNumber = (number: string) => {
  if (!number) return '-';

  return Number(number).toLocaleString();
};
