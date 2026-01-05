export const siteConfig = {
  author: 'mccray',
  title: 'Unraid Deck',
  subtitle: 'The beautiful, native iOS companion for your Unraid server.',
  description: 'Manage Docker containers, VMs, and monitor system health with the new Liquid Glass design.',
  image: {
    src: '/hero.jpg',
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
