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
    gallery: {
      title1: 'Categorias',
      menus: [
        {
          label: 'Especiales de la casa',
          href: 'home-specials',
          icon: 'home',
        },
        {
          label: 'Tacos',
          href: 'tacos',
          icon: 'taco',
        },
        {
          label: 'Antojitos Mexicanos',
          href: 'mexican-snacks',
          icon: 'mexican',
        },
        {
          label: 'Mariscos',
          href: 'seafood',
          icon: 'seafood',
        },
        {
          label: 'Bebidas + Postres',
          href: 'drinks-desserts',
          icon: 'dessert',
        },
      ],
      title: "Nuestra <span class='text-accent-3'>Galería</span>",
    },
  },
  foods: {
    'home-specials': {
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
          label: 'Mariscos',
          href: '/menu/seafood',
        },
      ],
      title: 'Mariscos',
      image: 'seafood-1',
      text: 'Ostiones',
      link: '',
      first: {
        name: 'Ostiones crudos',
        price: 'DOCENA $29.99  ½ DOCENA $19.99',
      },
      list: [
        {
          name: 'Filete de pescado a la plancha',
          description:
            '2 filetes de pescado a la plancha servidos con arroz, frijoles, ensalada y tortillas',
          price: '15.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 camarones grandes en salsa diabla (picante o suave), servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 camarones grandes a la parrilla, servidos con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Camarones a la mexicana',
          description:
            '15 camarones grandes preparados con pico de gallo, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones al mojo de ajo',
          description:
            '15 camarones grandes cocinados en mantequilla de ajo con cebolla, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra frita',
          description: 'Mojarra frita servida con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Mojarra a la diabla',
          description:
            'Mojarra frita con salsa picante, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra al mojo de ajo',
          description:
            'Mojarra frita sazonada con ajo y cebolla, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
      ],
      button: 'Ordenar Ahora',
    },
    tacos: {
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
          label: 'Mariscos',
          href: '/menu/seafood',
        },
      ],
      title: 'Mariscos',
      image: 'seafood-1',
      text: 'Ostiones',
      link: '',
      first: {
        name: 'Ostiones crudos',
        price: 'DOCENA $29.99  ½ DOCENA $19.99',
      },
      list: [
        {
          name: 'Filete de pescado a la plancha',
          description:
            '2 filetes de pescado a la plancha servidos con arroz, frijoles, ensalada y tortillas',
          price: '15.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 camarones grandes en salsa diabla (picante o suave), servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 camarones grandes a la parrilla, servidos con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Camarones a la mexicana',
          description:
            '15 camarones grandes preparados con pico de gallo, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones al mojo de ajo',
          description:
            '15 camarones grandes cocinados en mantequilla de ajo con cebolla, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra frita',
          description: 'Mojarra frita servida con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Mojarra a la diabla',
          description:
            'Mojarra frita con salsa picante, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra al mojo de ajo',
          description:
            'Mojarra frita sazonada con ajo y cebolla, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
      ],
      button: 'Ordenar Ahora',
    },
    'mexican-snacks': {
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
          label: 'Mariscos',
          href: '/menu/seafood',
        },
      ],
      title: 'Mariscos',
      image: 'seafood-1',
      text: 'Ostiones',
      link: '',
      first: {
        name: 'Ostiones crudos',
        price: 'DOCENA $29.99  ½ DOCENA $19.99',
      },
      list: [
        {
          name: 'Filete de pescado a la plancha',
          description:
            '2 filetes de pescado a la plancha servidos con arroz, frijoles, ensalada y tortillas',
          price: '15.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 camarones grandes en salsa diabla (picante o suave), servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 camarones grandes a la parrilla, servidos con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Camarones a la mexicana',
          description:
            '15 camarones grandes preparados con pico de gallo, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones al mojo de ajo',
          description:
            '15 camarones grandes cocinados en mantequilla de ajo con cebolla, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra frita',
          description: 'Mojarra frita servida con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Mojarra a la diabla',
          description:
            'Mojarra frita con salsa picante, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra al mojo de ajo',
          description:
            'Mojarra frita sazonada con ajo y cebolla, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
      ],
      button: 'Ordenar Ahora',
    },
    seafood: {
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
          label: 'Mariscos',
          href: '/menu/seafood',
        },
      ],
      title: 'Mariscos',
      image: 'seafood-1',
      text: 'Ostiones',
      link: '',
      first: {
        name: 'Ostiones crudos',
        price: 'DOCENA $29.99  ½ DOCENA $19.99',
      },
      list: [
        {
          name: 'Filete de pescado a la plancha',
          description:
            '2 filetes de pescado a la plancha servidos con arroz, frijoles, ensalada y tortillas',
          price: '15.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 camarones grandes en salsa diabla (picante o suave), servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 camarones grandes a la parrilla, servidos con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Camarones a la mexicana',
          description:
            '15 camarones grandes preparados con pico de gallo, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones al mojo de ajo',
          description:
            '15 camarones grandes cocinados en mantequilla de ajo con cebolla, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra frita',
          description: 'Mojarra frita servida con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Mojarra a la diabla',
          description:
            'Mojarra frita con salsa picante, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra al mojo de ajo',
          description:
            'Mojarra frita sazonada con ajo y cebolla, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
      ],
      button: 'Ordenar Ahora',
    },
    'drinks-desserts': {
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
          label: 'Mariscos',
          href: '/menu/seafood',
        },
      ],
      title: 'Mariscos',
      image: 'seafood-1',
      text: 'Ostiones',
      link: '',
      first: {
        name: 'Ostiones crudos',
        price: 'DOCENA $29.99  ½ DOCENA $19.99',
      },
      list: [
        {
          name: 'Filete de pescado a la plancha',
          description:
            '2 filetes de pescado a la plancha servidos con arroz, frijoles, ensalada y tortillas',
          price: '15.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 camarones grandes en salsa diabla (picante o suave), servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 camarones grandes a la parrilla, servidos con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Camarones a la mexicana',
          description:
            '15 camarones grandes preparados con pico de gallo, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones al mojo de ajo',
          description:
            '15 camarones grandes cocinados en mantequilla de ajo con cebolla, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra frita',
          description: 'Mojarra frita servida con arroz, frijoles y ensalada',
          price: '18.99',
        },
        {
          name: 'Mojarra a la diabla',
          description:
            'Mojarra frita con salsa picante, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Mojarra al mojo de ajo',
          description:
            'Mojarra frita sazonada con ajo y cebolla, servida con arroz, frijoles y ensalada',
          price: '19.99',
        },
      ],
      button: 'Ordenar Ahora',
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
