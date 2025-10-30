export default {
  header: {
    button: 'Conocer Más',
    nav: [
      {
        label: 'Inicio',
        href: '/',
      },
      {
        label: 'Menú',
        href: '/menu',
      },
      {
        label: 'Catering',
        href: '/catering',
      },
      {
        label: 'Pedido',
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
      text: 'Nuestros Servicios',
      title:
        "<span class='text-accent-1'>selecciona</span> <br /> lo que<br /> necesites",
      button: 'CONOCER MÁS',
      slides: [
        {
          image: 'bg-accent-2',
          text: 'Nuestros Servicios',
          title:
            "<span class='text-accent-1'>selecciona</span> <br /> lo que<br /> necesites",
          button: 'CONOCER MÁS',
        },
        {
          image: 'bg-accent-3',
          text: 'Nuestros Servicios',
          title:
            "<span class='text-accent-2'>selecciona</span> <br /> lo que<br /> necesites",
          button: 'CONOCER MÁS',
        },
        {
          image: 'bg-accent-1',
          text: 'Nuestros Servicios',
          title:
            "<span class='text-accent-3'>selecciona</span> <br /> lo que<br /> necesites",
          button: 'CONOCER MÁS',
        },
      ],
    },
    service: {
      text: 'Nuestros Servicios',
      title: 'selecciona lo que necesites',
      list: [
        {
          label: 'Orden',
          button: 'ver más',
          image: 'order',
          color: 'bg-accent-1',
        },
        {
          label: 'Catering',
          button: 'ver más',
          image: 'catering',
          color: 'bg-accent-2',
        },
        {
          label: 'Menú',
          button: 'ver más',
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
  },
  footer: {
    part1: {
      title: 'Comunícate con nosotros',
      button: 'Ir a contacto',
      text: 'síguenos:',
    },
    part2: {
      nav: [
        {
          label: 'Inicio',
          href: '/',
        },
        {
          label: 'Menú',
          href: '/menu',
        },
        {
          label: 'Catering',
          href: '/catering',
        },
        {
          label: 'Pedido',
          href: '/order',
        },
        {
          label: 'Info',
          href: '/info',
        },
      ],
      info: {
        label1: 'Escríbenos',
        label2: 'Llámanos',
        label3: 'Visítanos en',
      },
    },
  },
};
