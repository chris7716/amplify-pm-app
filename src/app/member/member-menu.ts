import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'My Projects',
    icon: 'layers-outline',
    group: true,
  },
  {
    title: 'On Going',
    link: 'projects/on-going',
    home: true,
  },
  {
    title: 'Overdue',
    link: 'projects/overdue',
  },
  {
    title: 'Completed',
    link: 'projects/completed',
  },
];
