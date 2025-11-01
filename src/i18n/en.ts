export default {
  header: {
    button: 'Learn More',
    nav: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Menu',
        href: '/menu',
      },
      {
        label: 'Catering',
        href: '/catering',
      },
      {
        label: 'Order',
        href: '#',
      },
      {
        label: 'Info',
        href: '/info',
      },
    ],
  },
  main: {
    hero: {
      text: 'Our Services',
      title:
        "<span class='text-accent-1'>select</span> <br /> what you <br /> need",
      button: 'LEARN MORE',
      slides: [
        {
          image: 'bg-accent-2',
          text: 'Our Services',
          title:
            "<span class='text-accent-1'>select</span> <br /> what you <br /> need",
          button: 'LEARN MORE',
        },
        {
          image: 'bg-accent-3',
          text: 'Our Services',
          title:
            "<span class='text-accent-2'>select</span> <br /> what you <br /> need",
          button: 'LEARN MORE',
        },
        {
          image: 'bg-accent-1',
          text: 'Our Services',
          title:
            "<span class='text-accent-3'>select</span> <br /> what you <br /> need",
          button: 'LEARN MORE',
        },
      ],
    },
    service: {
      text: 'Our Services',
      title: 'select what you need',
      list: [
        {
          label: 'Order',
          button: 'see more',
          image: 'order',
          color: 'bg-accent-1',
        },
        {
          label: 'Catering',
          button: 'see more',
          image: 'catering',
          color: 'bg-accent-2',
        },
        {
          label: 'Menu',
          button: 'see more',
          image: 'menu-2',
          color: 'bg-accent-3',
        },
      ],
    },
  },
  menu: {
    hero: {
      nav: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Menu',
          href: '/menu',
        },
      ],
      title: 'Menu',
      text: 'Take a look at our catering menu and fill out the form below to request a quote. This form is only a request. We require at least 24 hours notice for all catering orders so that our kitchen can prepare everything fresh and ready for your event. Once submitted, a member of our team will contact you to confirm your order.',
    },
    gallery: {
      title1: 'Category',
      menus: [
        {
          label: 'Home Specials',
          href: 'home-specials',
          icon:'home'
        },
        {
          label: 'Tacos',
          href: 'tacos',
          icon:'taco'
        },
        {
          label: 'Mexican Snacks',
          href: 'mexican-snacks',
          icon:'mexican'
        },
        {
          label: 'Seafood',
          href: 'seafood',
          icon:'seafood'
        },
        {
          label: 'Drinks + Desserts',
          href: 'drinks-desserts',
          icon:'dessert'
        },
      ],
      title: 'Our <span class="text-accent-3">Gallery</span>',
    },
  },
  footer: {
    part1: {
      title: 'Contact Us',
      button: 'Go to Contact',
      text: 'Follow us:',
    },
    part2: {
      nav: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Menu',
          href: '/menu',
        },
        {
          label: 'Catering',
          href: '/catering',
        },
        {
          label: 'Order',
          href: '/order',
        },
        {
          label: 'Info',
          href: '/info',
        },
      ],
      info: {
        label1: 'Write to us',
        label2: 'Call us',
        label3: 'Visit us at',
      },
    },
  },
};
