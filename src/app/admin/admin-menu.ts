import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Projects',
    icon: 'layers-outline',
    children: [
        {
            title: 'Create',
            link: 'project/create',
            home: true,
        },
        {
            title: 'List',
            link: 'project/list',
        },
    ]
  },
  {
    title: 'Members',
    icon: 'people-outline',
    children: [
        {
            title: 'List',
            link: 'member/list',
        },
    ]
  },
];
