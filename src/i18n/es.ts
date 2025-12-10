export default {
  header: {
    button: 'Ordena Ya',
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
      slides: [
        {
          image: 'hero-1',
          text: 'Disfruta el sabor de México',
          title:
            "<span class='text-accent-1'>auténtico</span> <br /> sabor <br /> mexicano",
          button: 'VER MENÚ',
          href: '/es/menu',
        },
        {
          image: 'hero-2',
          text: 'CATERING PARA TODAS LAS OCASIONES',
          title:
            "<span class='text-accent-2'>Catering</span> <br /> para cada <br /> evento",
          button: 'VER CATERING',
          href: '/es/catering',
        },
        {
          image: 'hero-3',
          text: 'VISÍTANOS O CONTÁCTANOS',
          title:
            "<span class='text-accent-4'>Auténtica </span> <br /> comida <br /> caras amigables ",
          button: 'CONTÁCTANOS',
          href: '/es/info#contact',
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
          color: 'bg-accent-3',
          href: '#',
        },
        {
          label: 'Taquizas & Catering',
          button: 'ver más',
          image: 'catering',
          color: 'bg-accent-1',
          href: 'catering',
        },
        {
          label: 'Menú',
          button: 'ver más',
          image: 'menu-2',
          color: 'bg-accent-2',
          href: 'menu',
        },
      ],
      gallery: {
        title: 'Nuestra Galería',
        items: [
          'bistec',
          'carne',
          'flautas',
          'parrillada',
          'sopa',
          'huarache',
          'quezabirrias',
          'sopes',
        ],
      },
    },
    testimony: {
      title: 'Testimonios',
      items: [
        'testimonial-1',
        'testimonial-2',
        'testimonial-3',
        'testimonial-4',
        'testimonial-5',
      ],
    },
  },
  menu: {
    hero: {
      nav: [
        {
          label: 'Inicio',
          href: '/',
        },
        {
          label: 'Menú',
          href: '/menu',
        },
      ],
      title: 'Menú',
      text: 'Echa un vistazo a nuestro menú de catering y completa el formulario abajo para solicitar un presupuesto. Este formulario es solo una solicitud. Requerimos un aviso mínimo de 24 horas para todos los pedidos de catering para que nuestra cocina pueda preparar todo fresco y listo para tu evento. Una vez enviado, un miembro de nuestro equipo se pondrá en contacto contigo para confirmar tu pedido.',
    },
    gallery: {
      title1: 'Categorias',
      description: 'Selecciona lo que estás buscando',
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
        {
          label: 'Promotions',
          href: 'promotions',
          icon: 'promotions',
        },
        {
          label: 'Kids Menu',
          href: 'kids-menu',
          icon: 'kids',
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
          label: 'Especiales de la casa',
          href: '/menu/home-specials',
        },
      ],
      title: 'Especiales de la casa',
      image: 'aguachiles',
      text: '',
      link: '',
      first: {
        name: '',
        price: '',
      },
      second: {
        name: '',
        description: '',
        price: ' ',
      },
      list: [
        {
          name: 'Parrillada especial para dos',
          description:
            'Bistec a la parrilla, chorizo, guacamole grande, 3 quesadillas de queso, chile relleno, pollo a la parrilla, cebolla y jalapeño frito.',
          price: '35.75',
        },
        {
          name: 'Parrillada El Solitario',
          description:
            'Bistec a la parrilla, chorizo, 2 oz de guacamole, 2 quesadillas de queso, papas fritas y pollo a la parrilla.',
          price: '24.99',
        },
        {
          name: 'Mojacajete',
          description:
            'Molcajete con pollo, bistec, chorizo, camarones y queso fresco, servido con cebolla, nopal, jalapeño y tortillas. Acompañado de arroz y frijoles.',
          price: '33.99',
        },
        {
          name: 'Carne asada',
          description:
            'Bistec a la parrilla servido con cebolla asada, jalapeño, arroz, frijoles, ensalada y tortillas.',
          price: '19.99',
        },
        {
          name: 'Bistec ranchero',
          description:
            'Bistec en salsa ranchera servido con arroz, frijoles, ensalada y tortillas.',
          price: '20.75',
        },
        {
          name: 'Chuleta ahumada',
          description:
            'Chuleta de cerdo a la parrilla con cebolla y jalapeño, servida con arroz, frijoles, ensalada y tortillas.',
          price: '15.99',
        },
        {
          name: 'Chuleta ahumada a la mexicana',
          description:
            'Chuleta de cerdo preparada con cebolla, jalapeño y tomate, servida con arroz, frijoles, ensalada y tortillas.',
          price: '17.75',
        },
        {
          name: 'Mar y Tierra',
          description:
            'Bistec a la parrilla con seis camarones grandes a la parrilla, cebolla y jalapeño; servido con arroz, frijoles, ensalada y tortillas.',
          price: '24.99',
        },
        {
          name: 'Filete empanizado',
          description:
            'Filete de res empanizado servido con arroz, frijoles, ensalada y tortillas.',
          price: '18.99',
        },
        {
          name: 'Chiles rellenos',
          description:
            '2 chiles poblanos rellenos de queso, cubiertos con crema y queso, servidos con arroz, frijoles, ensalada y tortillas.',
          price: '15.75',
        },
        {
          name: 'Pollo a la Diabla',
          description:
            'Pechuga de pollo en salsa diabla (picante o suave), servida con arroz y frijoles.',
          price: '18.99',
        },
        {
          name: 'Filete de pollo empanizado',
          description:
            'Pechuga de pollo empanizada servida con arroz, frijoles, ensalada y tortillas.',
          price: '18.99',
        },
        {
          name: 'Pollo a la plancha',
          description:
            'Pechuga de pollo a la parrilla servida con arroz, frijoles, ensalada y tortillas.',
          price: '16.99',
        },
        {
          name: 'Pollo a la mexicana',
          description:
            'Pechuga de pollo con pico de gallo, servida con arroz, frijoles, ensalada y tortillas.',
          price: '18.99',
        },
      ],
      button: 'Ordenar ahora',
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
          label: 'Tacos',
          href: '/menu/tacos',
        },
      ],
      title: 'Tacos',
      image: 'TACOS',
      text: '',
      link: '',
      first: {
        name: '',
        price: '',
      },
      second: {
        name: '',
        description: '',
        price: ' ',
      },
      list: [
        { name: 'Asada', description: '', price: '2.99' },
        { name: 'Pollo', description: '', price: '2.99' },
        { name: 'Carnitas', description: '', price: '2.99' },
        { name: 'Al pastor', description: '', price: '2.99' },
        { name: 'Cabeza', description: '', price: '2.99' },
        { name: 'Barbacoa', description: '', price: '2.99' },
        { name: 'Chicharrón', description: '', price: '2.99' },
        { name: 'Suadero', description: '', price: '2.99' },
        { name: 'Chorizo', description: '', price: '2.99' },
        { name: 'Buche', description: '', price: '2.99' },
        { name: 'Tripa', description: '', price: '3.25' },
        { name: 'Lengua', description: '', price: '3.49' },
        { name: 'Birria (res)', description: '', price: '2.99' },
        { name: 'Birria (borrego)', description: '', price: '3.75' },
        {
          name: 'Tacos de camarón',
          description: 'Tacos de camarón en tortilla de maíz (3 piezas)',
          price: '13.99',
        },
        {
          name: 'Tacos de pescado',
          description: 'Tacos de pescado en tortilla de maíz (3 piezas)',
          price: '13.99',
        },
      ],
      button: 'Ordenar ahora',
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
          label: 'Antojitos Mexicanos',
          href: '/menu/mexican-snacks',
        },
      ],
      title: 'Antojitos Mexicanos',
      image: 'sopes',
      text: '',
      link: '',
      first: {
        name: '',
        price: '',
      },
      second: {
        name: '',
        description: '',
        price: ' ',
      },
      list: [
        {
          name: 'Quesadilla supreme',
          description: 'Opción de carne servida con arroz, frijoles y ensalada',
          price: '14.99',
        },
        {
          name: 'Quesadilla (harina)',
          description: '',
          price: '9.99',
        },
        {
          name: 'Quesadilla (maíz)',
          description: '',
          price: '5.49',
        },
        {
          name: 'Burrito',
          description:
            'Opción de carne con arroz, frijoles, queso mozzarella, lechuga y crema',
          price: '11.75',
        },
        {
          name: 'Enchiladas Suizas',
          description:
            '4 enchiladas con opción de carne en salsa verde, servidas con arroz, frijoles y ensalada',
          price: '15.75',
        },
        {
          name: 'Gorditas',
          description:
            'Gordita frita con opción de carne, frijoles, crema, tomate, lechuga y queso',
          price: '7.99',
        },
        {
          name: 'Sopes',
          description:
            '5 sopes con frijoles, carne a elección, crema, tomate, lechuga y queso',
          price: '13.99',
        },
        {
          name: 'Sopes (tripa)',
          description:
            '5 sopes con tripa, frijoles, crema, tomate, lechuga y queso',
          price: '14.99',
        },
        {
          name: 'Sopes (lengua)',
          description:
            '5 sopes con lengua, frijoles, crema, tomate, lechuga y queso',
          price: '15.99',
        },
        {
          name: 'Flautas de pollo',
          description:
            '4 flautas de pollo fritas con crema, lechuga, queso, cebolla y tomate',
          price: '14.75',
        },
        {
          name: 'Tostadas con carne',
          description:
            'Tostada crujiente con carne a elección, frijoles, lechuga, cebolla, tomate, queso y crema',
          price: '6.75',
        },
        {
          name: 'Ensalada taco',
          description:
            'Plato con carne a elección, arroz, frijoles, lechuga, tomate, cebolla, queso y crema',
          price: '12.75',
        },
      ],
      button: 'Ordenar ahora',
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
      image: 'botana',
      text: 'Mariscos',
      link: '',
      first: {
        name: 'Ostras crudas',
        price: 'DOCENA $22.99, <br class="block lg:hidden"/>½ DOCENA $12.99 ',
      },
      second: {
        name: 'Ostras preparadas',
        description:
          'Ostras crudas cubiertas con salsa especial, camarón y pulpo',
        price: 'DOCENA $34.99, <br class="block lg:hidden"/>½ DOCENA $19.99 ',
      },
      list: [
        {
          name: 'Filete de pescado a la plancha',
          description:
            '2 filetes de pescado a la parrilla servidos con arroz, frijoles, ensalada y tortillas',
          price: '16.99',
        },
        {
          name: 'Filete de pescado empanizado',
          description:
            '2 filetes empanizados servidos con arroz, frijoles, ensalada y tortillas',
          price: '18.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 camarones grandes en salsa diabla (picante o suave), servidos con arroz, frijoles y ensalada',
          price: '20.75',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 camarones grandes a la parrilla, servidos con arroz, frijoles y ensalada',
          price: '19.99',
        },
        {
          name: 'Camarones a la mexicana',
          description:
            '15 camarones cocinados con pico de gallo, servidos con arroz, frijoles y ensalada',
          price: '20.75',
        },
        {
          name: 'Camarones al mojo de ajo',
          description:
            '15 camarones cocinados en mantequilla de ajo con cebolla, servidos con arroz, frijoles y ensalada',
          price: '20.75',
        },
        {
          name: 'Mojarra frita',
          description:
            'Mojarra frita servida con arroz, frijoles, ensalada y tortillas',
          price: '19.99',
        },
        {
          name: 'Mojarra a la diabla',
          description:
            'Mojarra frita cubierta con salsa picante o suave, servida con arroz, frijoles, ensalada y tortillas',
          price: '20.99',
        },
        {
          name: 'Mojarra al mojo de ajo',
          description:
            'Mojarra frita sazonada con ajo y cebolla, servida con arroz, frijoles, ensalada y tortillas',
          price: '20.99',
        },
        {
          name: 'Torre de mariscos',
          description: '',
          price: '23.99',
        },
        {
          name: 'Camarones aguachile',
          description: '',
          price: '19.99',
        },
        {
          name: 'Botana marisquera',
          description: '',
          price: '23.99',
        },
      ],
      button: 'Ordenar ahora',
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
          label: 'Bebidas y Postres',
          href: '/menu/drinks-desserts',
        },
      ],
      title: 'Bebidas y Postres',
      image: 'limonada',
      text: '',
      link: '',
      first: {
        name: '',
        price: '',
      },
      second: {
        name: '',
        description: '',
        price: ' ',
      },
      list: [
        {
          name: 'Agua fresca - Mediana',
          description: 'Horchata / Piña / Jamaica',
          price: '4.25',
        },
        {
          name: 'Agua fresca - Grande',
          description: 'Horchata / Piña / Jamaica',
          price: '5.25',
        },
        {
          name: 'Café',
          description: '',
          price: '3.25',
        },
        {
          name: 'Café de olla',
          description: '',
          price: '3.75',
        },
        {
          name: 'Chocolate Abuelita',
          description: '',
          price: '4.99',
        },
        {
          name: 'Coca-Cola (botella 500 ml)',
          description: '',
          price: '4.99',
        },
        {
          name: 'Jarritos',
          description: '',
          price: '3.99',
        },
        {
          name: 'Agua embotellada',
          description: '',
          price: '2.25',
        },
        {
          name: 'Refresco (lata)',
          description: '',
          price: '2.75',
        },
        {
          name: 'Jumex',
          description: '',
          price: '2.75',
        },
        {
          name: 'Malteada',
          description: 'Fresa / Chocolate',
          price: '6.99',
        },
        {
          name: 'Limonada fresca',
          description: '',
          price: '7.99',
        },
        {
          name: 'Cerveza',
          description:
            'Corona / Corona Familiar / Victoria / Modelo Especial / Pacifico / Heineken / Miller Lite / Coors Lite',
          price: '5.25',
        },
        {
          name: 'Michelada',
          description: '',
          price: '9.99',
        },
        {
          name: 'Caguama Corona',
          description: '',
          price: '13.99',
        },
        {
          name: 'Caguama Victoria',
          description: '',
          price: '13.99',
        },
        {
          name: 'Michelada Botanera',
          description: '',
          price: '16.99',
        },
        {
          name: 'Smirnoff',
          description: '',
          price: '5.99',
        },
        {
          name: 'Margarita Cayman Jack',
          description: '',
          price: '5.99',
        },
        {
          name: 'Fresas con crema',
          description: '',
          price: '9.99',
        },
        {
          name: 'Fresas Dubai',
          description: '',
          price: '16.99',
        },
        {
          name: 'Fresas con crema y chocolate',
          description: '',
          price: '12.99',
        },
        {
          name: 'Churros con helado',
          description: '',
          price: '11.99',
        },
      ],
      button: 'Ordenar ahora',
    },
    'kids-menu': {
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
          label: 'Menú Infantil',
          href: '/menu/kids-menu',
        },
      ],
      title: 'Menú Infantil',
      image: 'carne-asada',
      text: '',
      link: '',
      first: {
        name: '',
        price: '',
      },
      second: {
        name: '',
        description: '',
        price: ' ',
      },
      list: [
        {
          name: 'Tenders de pollo con papas fritas',
          description: '',
          price: '9.99',
        },
        {
          name: '2 tacos con arroz y frijoles',
          description: '',
          price: '9.99',
        },
        {
          name: 'Quesadilla de queso con arroz y frijoles',
          description: '',
          price: '8.99',
        },
        {
          name: 'Torta del Chavo con papas fritas',
          description: 'Jamón, mayonesa y queso',
          price: '10.75',
        },
        {
          name: 'Quesadilla de camarón',
          description: 'Servida con arroz y frijoles',
          price: '13.75',
        },
        {
          name: 'Carne asada',
          description: 'Servida con arroz y frijoles',
          price: '13.99',
        },
      ],
      button: 'Ordenar ahora',
    },
  },
  promotion: {
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
        label: 'Promociones',
        href: '/menu/promotions',
      },
    ],
    title: 'Promociones',
    image: 'sopes',
    list: [
      {
        title: 'Fin de semana',
        items: [
          {
            name: 'Birria de borrego',
            description:
              'Opción de carne servida con arroz, frijoles y ensalada',
            price: '18.99',
          },
          {
            name: 'Birria de res',
            description: '',
            price: '17.99',
          },
          {
            name: 'Pozole',
            description: '',
            price: '14.99',
          },
          {
            name: 'Menudo',
            description: '',
            price: '15.75',
          },
          {
            name: 'Quesabirria (2 pzas)',
            description: '',
            price: '10.99',
          },
          {
            name: '3 tacos de birria de borrego',
            description: '',
            price: '13.99',
          },
        ],
      },
    ],
    button: 'Ordenar ahora',
  },
  catering: {
    hero: {
      nav: [
        { label: 'Inicio', href: '/' },
        { label: 'Catering y Eventos', href: '/catering' },
      ],
      title: 'Catering y Eventos',
      text: 'Consulta nuestros servicios de Catering y Eventos y elige la opción que mejor se adapte a tu celebración. Tanto si necesitas platos frescos, hechos desde cero para tu reunión, como servicio completo para un evento especial, estamos aquí para ayudarte a que tu día sea inolvidable.',
    },
    description: {
      section1: {
        title:
          'Catering y Eventos listos para su <br/> <span class="text-accent-3"> Próxima Celebración</span>',
        text1:
          'Celebra tu ocasión especial con el auténtico sabor de Los Amecas Restaurante y Taquería. Ya sea que elijas nuestro Servicio de Catering o nuestro Servicio de Eventos, llevamos el corazón de la tradición mexicana a tu reunión con platillos preparados frescos todos los días en Orlando. Nuestro servicio de catering ofrece una selección irresistible de tacos con la carne que prefieras —jugosa carne asada, sabrosa barbacoa, pastor perfectamente sazonado o pollo tierno. Los amantes de los mariscos pueden disfrutar de nuestros populares tacos de camarón, tacos de pescado, mojarra frita o camarones a la diabla. Cada platillo se prepara con el mismo cuidado y sabor que han hecho de Los Amecas un favorito entre locales y visitantes. También preparamos guacamole fresco, totopos crujientes y churros dorados que a tus invitados les encantarán desde el primer bocado. ',
        text2:
          'Para almuerzos de trabajo o reuniones informales, nuestra "Mexican Lunch Box" ofrece una opción conveniente y satisfactoria con platillos acompañados de arroz, frijoles, ensalada y un postre dulce. Nuestro Servicio de Eventos es perfecto para celebraciones que van más allá de la comida. Desde cumpleaños y reuniones corporativas hasta reuniones familiares y fiestas privadas, te ayudamos a crear una experiencia inolvidable con montajes personalizados, opciones de servicio en sitio y menús adaptados a tu celebración. Llevamos el espíritu cálido y festivo de la hospitalidad mexicana a tu evento, asegurando un ambiente memorable donde buena comida y grandes momentos se unen. No importa qué servicio elijas, nuestro objetivo es que tu evento se sienta como una verdadera fiesta mexicana. Todo lo que ofrecemos se prepara fresco, se presenta con esmero y se entrega con el servicio confiable que define a Los Amecas; porque la buena comida reúne a las personas.',
        button: 'Ver menú',
      },
      section2: {
        title1: 'Interesado',
        text1:
          'Cuéntanos más sobre tu próxima celebración. Si solicitas nuestro Servicio de Catering o nuestro Servicio de Eventos, simplemente completa el formulario correspondiente abajo y nuestro equipo te asistirá con los siguientes pasos.<br/>Para solicitudes de catering, revisa nuestro menú de catering y envía el formulario para que podamos preparar un presupuesto. Requerimos un aviso mínimo de 24 horas para todos los pedidos de catering, para asegurarnos de que todo se prepare fresco y listo para tu evento.<br/>Para solicitudes de servicio de eventos, comparte los detalles de tu celebración y el tipo de montaje o apoyo que necesitas. <br/>Nuestro equipo te ayudará a crear una experiencia memorable a la medida de tus necesidades. Una vez enviado el formulario, un miembro de nuestro equipo se pondrá en contacto contigo para confirmar los detalles. Si no recibes noticias nuestras en 48 horas, por favor escríbenos a <a href="https://mail.google.com/mail/?view=cm&fs=1&to=losamecastaqueria@outlook.com" target="_blank" rel="noopener noreferrer">📧 losamecastaqueria@outlook.com</a> para que podamos asistirte de inmediato.',
        title2: 'Los Amecas Restaurante y Taquería',
        text2:
          '3558 S Orange Ave, Orlando, FL 32806 <br/> <a href="tel:+14072031512"> +1 (407) 203 1512</a> <br/> Auténtico sabor mexicano, tradición familiar y los mejores tacos en Orlando. <br/> Cerrado los domingos, pero siempre listos para atender tus fiestas entre semana.',
      },
    },
    notes: {
      title: 'NOTAS Y CONDICIONES',
      description:
        'Este formulario sirve únicamente como solicitud de catering. <br/> Requerimos un aviso mínimo de 24 horas para todos los pedidos, para asegurar la preparación fresca de los alimentos. <br/> Una vez enviado, un miembro de nuestro equipo se comunicará contigo para la confirmación. <br/> Si no recibes respuesta en 48 horas, por favor contáctanos directamente en: <br/> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=losamecastaqueria@outlook.com" target="_blank" rel="noopener noreferrer">📧 losamecastaqueria@outlook.com</a> <br/> <a href="tel:+14072031512"> 📞+1 (407) 203 1512</a> <br/> Los Amecas Restaurante y Taquería – 3558 S Orange Ave, Orlando FL 32806',
    },
  },
  info: {
    hero: {
      title:
        "Bienvenidos a <img src='/plate.webp' alt='Información de Los Amecas' width='64' height='64' class='w-18 h-18'/> Los Amecas <br/> Restaurante y Taquería <img src='/plate.webp' alt='Información de Los Amecas' width='64' height='64' class='w-18 h-18'/>",
      button: 'Ordena Ya',
    },
    description: {
      text: 'Desde que abrimos nuestras puertas en Orlando, Florida, en Los Amecas nos hemos dedicado a traerte los auténticos sabores de México: frescos, caseros y con mucho corazón. <br/> Nuestra misión es sencilla: servir comida deliciosa y auténtica hecha con cariño, tal como en casa. Cada taco, cada plato y cada salsa se prepara diariamente siguiendo recetas tradicionales que han sido parte de nuestra familia por generaciones.<br/> Desde nuestros famosos tacos de asada, barbacoa y pastor hasta los deliciosos mariscos como camarones a la diabla y mojarra frita, llevamos un pedazo de México a tu mesa en cada bocado. Ya sea que nos visites para el almuerzo, la cena o solicites catering para tu próximo evento, nos aseguramos de que te sientas como en casa. <br/> A nuestros clientes les encanta el servicio amable, las porciones generosas y el ambiente acogedor que hacen de Los Amecas más que un restaurante. Es un lugar donde amigos y familias se reúnen para celebrar, compartir historias y disfrutar de buena comida.',
      schedules: {
        title:
          "Ven y descubre por qué la gente local nos llama <br/> <span class='text-accent-3'>los mejores tacos en Orlando.</span>",
        hours: {
          title: 'Horario',
          content:
            'Lunes a Jueves y Domingos: 9:00 AM a 9:00 PM <br/> Viernes y Sábado: 9:00 AM a 9:30 PM',
        },
        location: {
          title: 'Ubicación',
          content: '3558 S Orange Ave, Orlando, FL 32806',
        },
        contact: {
          title: 'Contáctanos',
          content:
            'Síguenos en redes sociales para conocer los especiales del día, ver fotos y enterarte de los eventos de la comunidad. <br/>Auténtico sabor mexicano. Tradición familiar. Tu taquería favorita en Orlando.',
        },
      },
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
