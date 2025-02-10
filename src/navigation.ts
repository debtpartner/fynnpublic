import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
 //     text: 'Solutions',
//      href: getPermalink('/solutions'),
    },
    {
  //    text: 'Pricing',
  //    href: getPermalink('/pricing'),
    },
    {
  //    text: 'Resources',
   //   links: [
    //    {
    //      text: 'Blog',
    //      href: getBlogPermalink(),
    //    },
     //   {
    //      text: 'Case Studies',
     //     href: getPermalink('/case-studies'),
       // },
     //   {
     //     text: 'Documentation',
       //   href: getPermalink('/docs'),
      //  },
    //  ],
    },

  ],
  actions: [

    { 
      text: 'Login',
      href: '/app',
      'data-astro-reload': true, // Reload the page when clicked
    },
    { 
      text: 'Start for Free',
      href: '/contact',
//      target: '_blank',
      variant: 'primary',
      icon: 'tabler:rocket',
      'data-astro-reload': true, // Reload the page when clicked
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Fynn Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Cookie Policy', href: getPermalink('/cookie-policy') },
  ],
  socialLinks: [
    { ariaLabel: 'ReddIt', icon: 'tabler:brand-reddit', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Threads', icon: 'tabler:brand-threads', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },

  ],

  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    © 2025 Fynn · All rights reserved.
  `,
};