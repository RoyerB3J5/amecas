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
          image: 'bg-accent-2',
          text: 'Nuestros Servicios',
          title:
            "<span class='text-accent-1'>selecciona</span> <br /> lo que<br /> necesites",
          button: 'CONOCER MÁS',
          href: '/en/menu',
        },
        {
          image: 'bg-accent-3',
          text: 'Nuestros Servicios',
          title:
            "<span class='text-accent-2'>selecciona</span> <br /> lo que<br /> necesites",
          button: 'CONOCER MÁS',
          href: '/en/menu',
        },
        {
          image: 'bg-accent-1',
          text: 'Nuestros Servicios',
          title:
            "<span class='text-accent-3'>selecciona</span> <br /> lo que<br /> necesites",
          button: 'CONOCER MÁS',
          href: '/en/menu',
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
    gallery: {
      title: 'Our Gallery',
      items: [
        'gallery-1',
        'gallery-2',
        'gallery-3',
        'gallery-4',
        'gallery-5',
        'gallery-6',
        'gallery-7',
        'gallery-8',
      ],
    },
    testimony: {
      title: 'Testimonios',
      items: [
        'testimonial-1',
        'testimonial-1',
        'testimonial-1',
        'testimonial-1',
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
  catering: {
    hero: {
      nav: [
        {
          label: 'Inicio',
          href: '/',
        },
        {
          label: 'Catering',
          href: '/catering',
        },
      ],
      title: 'Catering',
      text: 'Consulte nuestro menú de catering y complete el formulario a continuación para solicitar un presupuesto. Este formulario es solo una solicitud. Requerimos un aviso de al menos 24 horas para todos los pedidos de catering, de modo que nuestra cocina pueda preparar todo fresco y listo para su evento. Una vez enviado, un miembro de nuestro equipo se comunicará con usted para confirmar su pedido. ',
    },
    description: {
      section1: {
        title:
          'Catering listo para tu <br/> <span class="text-accent-3">próxima fiesta</span>',
        text1:
          'Celebra tu ocasión especial con el sabor auténtico de Los Amecas Restaurante y Taquería. Nuestro menú de catering lleva el corazón de la tradición mexicana a tu evento con platos caseros preparados frescos todos los días en Orlando. <br/>Disfruta de una selección irresistible de tacos con la carne que prefieras: carne asada jugosa, barbacoa sabrosa, al pastor perfectamente sazonado o pollo tierno. Los amantes de los mariscos pueden deleitarse con nuestros famosos tacos de camarón, tacos de pescado, mojarra frita o camarones a la diabla. Cada platillo se prepara con el mismo cuidado y sabor que han hecho de Los Amecas un favorito entre locales y visitantes.',
        text2:
          'Llevamos a tu fiesta guacamole recién hecho, totopos crujientes y churros dorados que a tus invitados les encantarán desde el primer bocado. <br/>Si organizas un almuerzo de trabajo o una reunión informal, nuestra práctica "Mexican Lunch Box" facilita todo y satisface: cada caja incluye tu elección de plato principal, arroz, frijoles, ensalada y un postre dulce para terminar. Nuestro objetivo es que tu evento se sienta como una verdadera fiesta mexicana. Todo lo que servimos se prepara fresco, se presenta con esmero y se entrega a tiempo.',
        button: 'Ver menú',
      },
      section2: {
        title1: 'Interesado',
        text1:
          'Consulta nuestro menú de catering y completa el formulario a continuación para solicitar un presupuesto. Este formulario es solo una solicitud. Requerimos un aviso de al menos 24 horas para todos los pedidos de catering, de modo que nuestra cocina pueda preparar todo fresco y listo para tu evento.<br/> Una vez enviado, un miembro de nuestro equipo se comunicará contigo para confirmar tu pedido. Si no recibes respuesta en 48 horas, envía un correo a losamecas@gmail.com.',
        title2: 'Los Amecas Restaurante y Taquería',
        text2:
          '3558 S Orange Ave, Orlando, FL 32806 <br/> (407) XXX XXXX <br/> Auténtico sabor mexicano, tradición familiar y los mejores tacos en Orlando. <br/> Cerrado los domingos, pero siempre listos para atender tus fiestas entre semana.',
      },
    },
    request: {
      title:
        "🇲🇽 LOS AMECAS – <span class='text-accent-3'>FORMULARIO DE SOLICITUD DE CATERING</span> 🇲🇽 ",
      taco: {
        title: '🌮 BAR DE TACOS',
        description:
          'Arma tus propios tacos con tortillas hechas al momento, carnes y guarniciones de la cocina tradicional de Los Amecas. 20 tacos por pedido.',
        meats: {
          title: 'Elige tus carnes:',
          items: [
            'Asada (Carne de res)',
            'Carnitas (Puerco)',
            'Pastor (Puerco marinado)',
            'Pollo (Pollo)',
            'Barbacoa (Brisket)',
            'Lengua (Lengua de res)',
            'Tripa (Tripa)',
            'Chorizo (Chorizo mexicano)',
            'Chicharrón (Chicharrón)',
            'Pescado',
            'Tacos de camarón',
          ],
        },
        toppings: {
          title: 'Guarniciones y salsas:',
          items: [
            'Cebolla',
            'Salsa verde',
            'Queso fresco',
            'Cilantro',
            'Salsa roja',
            'Crema',
            'Lima fresca',
            'Salsa de habanero',
            'Pico de gallo',
          ],
        },
      },
      guacamole: {
        title: '🥑 BAR DE GUACAMOLE',
        description:
          'Disfruta nuestro guacamole casero servido con totopos crujientes.<br/> Agrega tus toppings favoritos – $5 cada uno:',
        items: [
          'Tomate fresco',
          'Cebolla a la parrilla',
          'Queso fresco',
          'Chicharrón',
          'Rajas de poblano asadas',
          'Trocitos de tocino',
          'Semillas de calabaza',
        ],
      },
      specials: {
        title: '🍽️ ANTOJITOS Y ESPECIALES',
        description:
          'Cada orden sirve aproximadamente a 10 personas. Por favor selecciona la cantidad deseada.',
        title2: 'Toppings y salsas:',
        items: [
          'Huaraches (A elección de carne, frijoles, lechuga, aguacate, crema y queso)',
          'Quesadillas Supreme (Harina o maíz, con arroz, frijoles y ensalada)',
          'Enchiladas Suizas (Salsa verde, queso, arroz y frijoles)',
          'Gorditas (Bolsitas de maíz fritas con frijoles, lechuga, queso y carne)',
          'Sopes (Frijoles, carne, lechuga, tomate, crema y queso)',
          'Flautas de Pollo (Tortillas crujientes rellenas de pollo, arroz y frijoles)',
          'Tostadas de Carne (Tostada crujiente con carne, frijoles, lechuga y crema)',
          'Taco Salad (Con arroz, frijoles, carne, lechuga, tomate y queso)',
          'Carne Asada (Bistec a la parrilla, arroz, frijoles, ensalada y tortillas)',
          'Bistek Ranchero (Carne salteada con cebolla y salsa, arroz y frijoles)',
          'Pollo a la Plancha (Pechuga de pollo a la parrilla con arroz y frijoles)',
          'Mojarra Frita (Mojarra frita con arroz, frijoles y ensalada)',
          'Camarones a la Diabla (Camarones picantes con arroz y frijoles)',
        ],
      },
      desserts: {
        title: '🍰 POSTRES',
        description:
          'Cada orden sirve 10 personas. Por favor selecciona la cantidad.',
        items: [
          'Churros – Dorados y crujientes, servidos con azúcar y canela',
          'Flan Casero – Cremoso flan casero',
          'Pastel Tres Leches – Húmedo y dulce, favorito de la casa',
        ],
      },
      drinks: {
        title: '🥤 BEBIDAS',
        description: 'Por favor selecciona la cantidad deseada.',
        items: [
          'Coca-Cola Mexicana (Con azúcar de caña)',
          'Jarritos (Sabores surtidos)',
          'Agua de Jamaica (Té de hibisco)',
          'Agua de Horchata (Bebida de arroz dulce)',
          'Limonada (Limonada clásica)',
        ],
      },
      supplies: {
        title: '🍴 SUMINISTROS DE CATERING',
        description:
          'Marca los artículos que quieras incluir (ajustaremos la cantidad según el tamaño de tu pedido):',
        items: [
          'Platos',
          'Cubiertos',
          'Servilletas',
          'Pinzas',
          'Cucharas para servir',
        ],
      },
      beer: {
        title: '🍻 OPCIONES DE CERVEZA Y VINO',
        items: [
          'Estoy interesado en agregar cerveza al pedido',
          'Estoy interesado en agregar vino al pedido',
        ],
      },
    },
    notes: {
      title: 'NOTES & CONDITIONS',
      description:
        'This form serves as a catering request only. <br/> We require at least 24 hours’ notice for all orders to ensure fresh preparation. <br/> Once submitted, a member of our team will contact you for confirmation. <br/>  If you don’t hear back within 48 hours, please reach out directly at: <br/> <a>📧 losamecas@gmail.com</a> <br/> <a> 📞 (407) XXX-XXXX</a> <br/> Los Amecas Restaurante y Taquería – 3558 S Orange Ave, Orlando FL 32806 <br/>  Authentic Mexican flavor, family tradition, and the best tacos in Orlando.',
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
          content: 'Lunes a sábado: 10:00 AM a 9:30 PM <br/> Domingo: cerrado',
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
