export interface ISideMenuItem {
  title: string;
  icon: string;
  path: string;
}

const GeneralSideMenuData: ISideMenuItem[] = [
  {
    title: 'Dashboard',
    icon: '/assets/icons/menu/category.svg',
    path: 'dashboard',
  },
  {
    title: 'Calendar',
    icon: '/assets/icons/menu/calendar.svg',
    path: 'calendar',
  },
  {
    title: 'Payments',
    icon: '/assets/icons/menu/card.svg',
    path: 'payments',
  },
  {
    title: 'Care Team',
    icon: '/assets/icons/menu/threeUser.svg',
    path: 'care-team',
  },
  {
    title: 'Messages',
    icon: '/assets/icons/menu/chat.svg',
    path: 'messages',
  },
];

const OtherSideMenuData: ISideMenuItem[] = [
  {
    title: 'Settings',
    icon: '/assets/icons/menu/settings.svg',
    path: 'settings',
  },
  // {
  //   title: 'Logout',
  //   icon: '/assets/icons/menu/logout.svg',
  //   path: 'logout',
  // },
];

export { GeneralSideMenuData, OtherSideMenuData };

const homeRoutes = [
  ...GeneralSideMenuData,
  ...OtherSideMenuData.filter((item) => item.title !== 'Logout'),
];

export default homeRoutes;
