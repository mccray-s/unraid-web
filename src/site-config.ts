export const siteConfig = {
  author: 'mccray',
  title: 'Unraid Deck',
  subtitle: 'The beautiful, native iOS companion for your Unraid server.',
  description: 'The fastest way to monitor and manage your Unraid server. A native Unraid iOS App that lets you control Docker containers, VMs, and check stats directly from your iPhone. Built for the Unraid API.',
  image: {
    src: '/images/screenshot-01.jpg',
    alt: 'Unraid Deck',
  },
  email: 'apps.mccray@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/mccray-s',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Unraid Deck Logo',
    },
    navLinks: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Privacy',
        href: '/privacy',
      },
    ],
  },
  page: {
    blogLinks: [] as Array<{ text: string, href: string }>,
  },
  footer: {
    navLinks: [
      {
        text: 'Privacy Policy',
        href: '/privacy',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/mccray-s',
      },
    ],
  },
}

export default siteConfig
