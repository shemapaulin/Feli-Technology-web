
export interface MenuItem {
  id?: number; //string;
  name: string;
  link: string;
}

export const navMenu: MenuItem[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About us',
    link: '/about',
  },
  {
    name: 'Achievements',
    link: '/achievements',
  },
  {
    name: 'Calculator',
    link: '/calculator',
  },
  {
    name: 'Portfolio',
    link: '/portfolio',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];