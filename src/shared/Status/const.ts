export const APPLICATION_STATUS_MAP = {
  in_progress: '#5D5D5D',
  past_due: '#F9372C',
  completed: '#1C9A13',
  have_review: '#019EC1',
} as const;

export const APPLICATION_STATUS_TITLE_MAP = {
  in_progress: 'Выполняется',
  past_due: 'Просрочена',
  completed: 'Выполнена',
  have_review: 'Есть отзыв',
} as const;
