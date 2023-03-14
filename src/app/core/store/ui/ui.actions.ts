import { createActionGroup, emptyProps } from '@ngrx/store';

export const UIPageActions = createActionGroup({
  source: 'UI Page',
  events: {
    'Show Loading': emptyProps(),
    'Hide Loading': emptyProps(),
  },
});
