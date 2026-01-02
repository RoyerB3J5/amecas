export default {
  header: {
    button: 'order now',
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
        href: 'https://www.clover.com/online-ordering/los-amecas-restaurante-orlando',
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
          text: 'Enjoy the taste of Mexico',
          title:
            "<span class='text-accent-1'>authentic</span> <br /> Mexican <br /> flavor",
          button: 'View Menu',
          href: '/en/menu',
        },
        {
          image: 'hero-2',
          text: 'CATERING FOR EVERY OCCASION',
          title:
            "<span class='text-accent-2'>Catering </span> <br /> for Every <br /> Event",
          button: 'View catering',
          href: '/en/catering',
        },
        {
          image: 'hero-3',
          text: 'VISIT OR REACH OUT',
          title:
            "<span class='text-accent-4'>Authentic </span> <br /> Food <br /> friendly Faces",
          button: 'Contact US',
          href: '/en/info#contact',
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
          color: 'bg-accent-3',
          href: 'https://www.clover.com/online-ordering/los-amecas-restaurante-orlando',
        },
        {
          label: 'Taquizas & Catering',
          button: 'see more',
          image: 'catering',
          color: 'bg-accent-1',
          href: 'catering',
        },
        {
          label: 'Menu',
          button: 'see more',
          image: 'menu-2',
          color: 'bg-accent-2',
          href: 'menu',
        },
      ],
      gallery: {
        title: 'Our Gallery',
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
      title: 'Testimonials',
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
      description: "Select what you're looking for",
      menus: [
        {
          label: 'Home Specials',
          href: 'home-specials',
          icon: 'home',
        },
        {
          label: 'Tacos',
          href: 'tacos',
          icon: 'taco',
        },
        {
          label: 'Mexican Snacks',
          href: 'mexican-snacks',
          icon: 'mexican',
        },
        {
          label: 'Seafood',
          href: 'seafood',
          icon: 'seafood',
        },
        {
          label: 'Drinks + Desserts',
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
      title: 'Our <span class="text-accent-3">Gallery</span>',
    },
  },
  foods: {
    'home-specials': {
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
          label: 'Home Specials',
          href: '/menu/home-specials',
        },
      ],
      title: 'Home Specials',
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
          name: 'Parrillada especial for two',
          description:
            '100oz of grill steak, Mexican sausage, big size of guacamole, 3 cheese quesadillas, chile relleno, grilled chicken, onion and fried jalapeño.',
          price: '35.75',
        },
        {
          name: 'Parrillada El Solitario',
          description:
            'Grill steak, Mexican sausage, 2 oz of guacamole, 2 cheese quesadillas, fries, grilled chicken, onion and fried jalapeño.',
          price: '24.99',
        },
        {
          name: 'Mojacajete',
          description:
            'Lava rock bowl fillet with grilled chicken, steak, chorizo, shrimp and slice of queso fresco marinated and with onions, cactus, jalapeño toreado. Served with rice, beans salad and tortillas',
          price: '33.99',
        },
        {
          name: 'Carne asada',
          description:
            'Grilled steak, served with grilled onion, grilled jalapeño, rice, beans, salad and tortillas.',
          price: '19.99',
        },
        {
          name: 'Bistec ranchero',
          description:
            'Beef steak in Mexican red sauce served with rice, beans, salad and tortillas.',
          price: '20.75',
        },
        {
          name: 'Chuleta ahumada',
          description:
            'Grilled pork chop onion and jalapeño served with rice and beans, salad and tortillas.',
          price: '15.99',
        },
        {
          name: 'Chuleta ahumada a la mexicana',
          description:
            'Grilled pork chop mixed with onion, jalapeño and tomato served with rice, beans, salad and tortillas.',
          price: '17.75',
        },
        {
          name: 'Mar y Tierra',
          description:
            'Grilled steak with six big grilled shrimps, grilled onion and jalapeño with rice beans, salad and tortillas.',
          price: '24.99',
        },
        {
          name: 'Filete de Res empanizado',
          description:
            'Breaded steak served with rice, beans, salad and tortillas.',
          price: '18.99',
        },
        {
          name: 'Chile’s rellenos',
          description:
            '2 poblano peppers filled with cheese topped with sour cream and cheese, served with rice, beans, salad and tortillas.',
          price: '15.75',
        },
        {
          name: 'Pollo a la Diabla',
          description:
            'Grilled chicken breast with spicy or mild sauce served with rice and beans.',
          price: '18.99',
        },
        {
          name: 'Filete de pollo empanizado',
          description:
            'Breaded chicken served with rice, beans, salad and tortillas.',
          price: '18.99',
        },
        {
          name: 'Grilled chicken / Pollo a la plancha',
          description:
            'Grilled chicken breast served with rice, beans, salad and tortillas.',
          price: '16.99',
        },
        {
          name: 'Pollo a la Mexicana',
          description:
            'Grilled chicken breast mixed with pico de gallo served with rice, beans, salad and tortillas.',
          price: '18.99',
        },
      ],
      button: 'Order Now',
    },
    tacos: {
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
        { name: 'Asada/Steak', description: '', price: '2.99' },
        { name: 'Pollo/Chicken', description: '', price: '2.99' },
        { name: 'Carnitas/Roasted pork', description: '', price: '2.99' },
        { name: 'Pastor/Marinated Pork', description: '', price: '2.99' },
        { name: 'Cabeza/Beef head', description: '', price: '2.99' },
        { name: 'Barbacoa/Brisket', description: '', price: '2.99' },
        { name: 'Chicharron/Pork Belly', description: '', price: '2.99' },
        { name: 'Suadero', description: '', price: '2.99' },
        { name: 'Chorizo/Mexican sausage', description: '', price: '2.99' },
        { name: 'Buche/Pork stomach', description: '', price: '2.99' },
        { name: 'Tripa/Tripe', description: '', price: '3.25' },
        { name: 'Lengua/Beef tongue', description: '', price: '3.49' },
        { name: 'Birria res', description: '', price: '2.99' },
        { name: 'Birria Borrego', description: '', price: '3.75' },
        {
          name: 'Tacos Camaron',
          description: 'Shrimp tacos corn flour tortilla 3 pieces',
          price: '13.99',
        },
        {
          name: 'Tacos de Pescado',
          description: 'Fish tacos corn flour (3 pieces)',
          price: '13.99',
        },
      ],
      button: 'Order Now',
    },
    'mexican-snacks': {
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
          label: 'Mexican Snacks',
          href: '/menu/mexican-snacks',
        },
      ],
      title: 'Mexican Snacks',
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
          name: 'Quezadilla supreme',
          description: 'Choice of meat served with rice, beans and salad',
          price: '14.99',
        },
        {
          name: 'Quezadilla harina sola',
          description: '',
          price: '9.99',
        },
        {
          name: 'Quezadilla maiz sola',
          description: '',
          price: '5.49',
        },
        {
          name: 'Burrito',
          description:
            'Choice of meat fillet with rice, beans, mozzarella cheese, lettuce and sour cream',
          price: '11.75',
        },
        {
          name: 'Enchiladas Suizas',
          description:
            '4 enchiladas choice of meat topped special green sauce served with rice, beans and salad',
          price: '15.75',
        },
        {
          name: 'Gorditas',
          description:
            'Fried gordita, choice of meat fillet with beans, sour cream, tomato, lettuce and cheese',
          price: '7.99',
        },
        {
          name: 'Sopes',
          description:
            'Order with 5 sopes topped with beans, choice of meat, sour cream, tomato, lettuce and cheese',
          price: '13.99',
        },
        {
          name: 'Sopes Tripa',
          description:
            'Order with 5 sopes topped with beans, choice of meat, sour cream, tomato, lettuce and cheese',
          price: '14.99',
        },
        {
          name: 'Sopes Lengua',
          description:
            'Order with 5 sopes topped with beans, choice of meat, sour cream, tomato, lettuce and cheese',
          price: '15.99',
        },
        {
          name: 'Flautas de pollo',
          description:
            '4 rolled fried tortillas topped with sour cream, lettuce, cheese, onion and tomato',
          price: '14.75',
        },
        {
          name: 'Tostadas with meat',
          description:
            'Hard shell topped with choice of meat, beans, lettuce, onion, tomato, cheese and sour cream',
          price: '6.75',
        },
        {
          name: 'Taco Salad',
          description:
            'Fillet with choice of meat, rice, beans, lettuce, tomato, onion, cheese and sour cream',
          price: '12.75',
        },
      ],
      button: 'Order Now',
    },
    seafood: {
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
          label: 'Seafood',
          href: '/menu/seafood',
        },
      ],
      title: 'Seafood',
      image: 'botana',
      text: 'Oysters',
      link: '',
      first: {
        name: 'Raw oysters',
        price: 'DOZEN $22.99, <br class="block lg:hidden"/>½ DOZEN $12.99 ',
      },
      second: {
        name: 'Prepared oysters',
        description:
          'Raw oysters topped with special sauce with shrimp and octopus',
        price: 'DOZEN $34.99, <br class="block lg:hidden"/>½ DOZEN $19.99 ',
      },
      list: [
        {
          name: 'Filete de Pescado a la Plancha',
          description:
            '2 grilled fish fillets served with rice, beans, salad and tortillas',
          price: '16.99',
        },
        {
          name: 'Filete de Pescado Empanizado',
          description:
            '2 fish breaded fillets served with rice, beans, salad and tortillas',
          price: '18.99',
        },
        {
          name: 'Camarones a la diabla',
          description:
            '15 jumbo shrimps in diabla sauce (hot or mild), served with rice, beans and salad',
          price: '20.75',
        },
        {
          name: 'Camarones a la plancha',
          description:
            '15 jumbo shrimps grilled, served with rice, beans and salad',
          price: '19.99',
        },
        {
          name: 'Camarones a la Mexicana',
          description:
            '15 jumbo shrimps cooked with pico de gallo, served with rice, beans and salad',
          price: '20.75',
        },
        {
          name: 'Camarones al mojo de Ajo',
          description:
            '15 jumbo shrimps cooked in garlic butter with onion, served with rice, beans and salad',
          price: '20.75',
        },
        {
          name: 'Mojarra Frita',
          description:
            'Fried red tilapia served with rice, beans,  salad and tortill',
          price: '19.99',
        },
        {
          name: 'Mojarra a la Diabla',
          description:
            'Fried Tilapia topped with spicy or mild sauce served with rice, beans, salad and tortillas',
          price: '20.99',
        },
        {
          name: 'Mojarra al Mojo de Ajo',
          description:
            'Fried tilapia seasoned with garlic and onion, served with rice, beans, salad and tortillas',
          price: '20.99',
        },
        {
          name: 'Torre de Mariscos',
          description: '',
          price: '23.99',
        },
        {
          name: 'Camarones Aguachile',
          description: '',
          price: '19.99',
        },
        {
          name: 'Botana Marisquera',
          description: '',
          price: '23.99',
        },
      ],
      button: 'Order Now',
    },
    'drinks-desserts': {
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
          label: 'Drinks & Desserts',
          href: '/menu/drinks-desserts',
        },
      ],
      title: 'Drinks & Desserts',
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
          name: 'Agua Fresca - Mediana',
          description: 'Rice water / Pineapple / Jamaica',
          price: '4.25',
        },
        {
          name: 'Agua Fresca - Grande',
          description: 'Rice water / Pineapple / Jamaica',
          price: '5.25',
        },
        {
          name: 'Cafe',
          description: '',
          price: '3.25',
        },
        {
          name: 'Cafe de Olla',
          description: '',
          price: '3.75',
        },
        {
          name: 'Chocolate Abuelita',
          description: '',
          price: '4.99',
        },
        {
          name: 'CocaCola Vidrio 500 ml',
          description: '',
          price: '4.99',
        },
        {
          name: 'Jarritos',
          description: '',
          price: '3.99',
        },
        {
          name: 'Bottle water',
          description: '',
          price: '2.25',
        },
        {
          name: 'Can Soda',
          description: '',
          price: '2.75',
        },
        {
          name: 'Jumex',
          description: '',
          price: '2.75',
        },
        {
          name: 'Milkshake',
          description: 'Strawberry / Chocomilk',
          price: '6.99',
        },
        {
          name: 'Fresh Lemonade',
          description: '',
          price: '7.99',
        },
        {
          name: 'Beer',
          description:
            'Corona / Corona Familiar / Victoria / Modelo Especial / Pacifico / Heineken / 2 X large / 2X amber / Miller lite / Coors lite',
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
          name: 'Margarita Cayman jack',
          description: '',
          price: '5.99',
        },
        {
          name: 'Fresas con Crema',
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
          name: 'Churros with ice cream',
          description: '',
          price: '11.99',
        },
      ],
      button: 'Order Now',
    },
    'kids-menu': {
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
          label: 'Kids Menu',
          href: '/menu/kids-menu',
        },
      ],
      title: 'Kids Menu',
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
          name: 'Chiken tender with fries',
          description: '',
          price: '9.99',
        },
        {
          name: '2 tacos with rice and beans',
          description: '',
          price: '9.99',
        },
        {
          name: 'Cheese quesadilla with rice and beans',
          description: '',
          price: '8.99',
        },
        {
          name: 'Torta del chavo with fries',
          description: 'Ham, mayonnaise and cheese',
          price: '10.75',
        },
        {
          name: 'Shrimp quesadilla',
          description: 'Served with rice and beans',
          price: '13.75',
        },
        {
          name: 'Carne asada',
          description: 'Served with rice and beans',
          price: '13.99',
        },
      ],
      button: 'Order Now',
    },
  },
  promotion: {
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
        label: 'Promotion',
        href: '/menu/promotions',
      },
    ],
    title: 'Promotion',
    image: 'quezadilla',
    list: [
      {
        title: 'Fin de Semana',
        items: [
          {
            name: 'Lamb Birria',
            description: 'Choice of meat served with rice, beans and salad',
            price: '18.99',
          },
          {
            name: 'Birria de Res',
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
            name: 'Queza Birrria 2 pzas',
            description: '',
            price: '10.99',
          },
          {
            name: '3 Tacos Birria de Borrego',
            description: '',
            price: '13.99',
          },
        ],
      },
    ],
    button: 'Order Now',
  },
  catering: {
    hero: {
      nav: [
        { label: 'Home', href: '/' },
        { label: 'Catering & Events', href: '/catering' },
      ],
      title: 'Catering & Events',
      text: 'Take a look at our Catering and Events services and choose the option that best fits your celebration. Whether you need fresh, made from scratch dishes for your gathering or full service for a special event, we’re here to help make your day unforgettable. ',
    },
    description: {
      section1: {
        title:
          'Fiesta Ready Catering & Events for Your <br/> <span class="text-accent-3"> Next Celebration</span>',
        text1:
          'Celebrate your special occasion with the authentic flavor of Los Amecas Restaurante y Taquería. Whether you choose our Catering Service or our Events Service, we bring the heart of Mexican tradition to your gathering with dishes prepared fresh every day in Orlando. <br/> Our Catering Service offers an irresistible selection of tacos filled with your choice of meats such as juicy carne asada, flavorful barbacoa, perfectly seasoned al pastor, and tender pollo. Seafood lovers can enjoy our popular shrimp tacos, fish tacos, mojarra frita, or camarones a la diabla. Every dish is crafted with the same care and flavor that have made Los Amecas a favorite among locals and visitors. We also prepare fresh guacamole, crispy tortilla chips, and golden churros your guests will love from the very first bite. ',
        text2:
          'For business lunches or casual gatherings, our Mexican Lunch Box provides a convenient and satisfying option with entrées served alongside rice, beans, salad, and a sweet dessert. Our Events Service is perfect for celebrations that go beyond food. From birthdays and corporate gatherings to family reunions and private parties, we help you create an unforgettable experience with customized setups, on-site service options, and menus tailored to your celebration. We bring the warm and festive spirit of Mexican hospitality to your event, ensuring a memorable atmosphere where great food and great moments come together. No matter which service you choose, our goal is to make your event feel like a true Mexican fiesta. Everything we provide is prepared fresh, beautifully presented, and delivered with the reliable service that defines Los Amecas, because great food brings people together.',
        button: 'View - Menu',
      },
      section2: {
        title1: 'Interested',
        text1:
          'Tell us more about your upcoming celebration. Whether you are requesting our Catering Service or our Events Service, simply fill out the appropriate form below and our team will assist you with the next steps.<br/> For catering requests, please review our catering menu and submit the form so we can prepare a quote for you. We require at least 24 hours notice for all catering orders to ensure everything is prepared fresh and ready for your event.<br/> For event service requests, share the details of your celebration and the type of setup or support you are looking for. <br/> Our team will help you create a memorable experience tailored to your needs. Once your form is submitted, a member of our team will contact you to confirm the details. If you do not hear from us within 48 hours, please email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=losamecastaqueria@outlook.com" target="_blank" rel="noopener noreferrer">📧 losamecastaqueria@outlook.com</a> so we can assist you right away.',
        title2: 'Los Amecas Restaurante y Taquería',
        text2:
          '3558 S Orange Ave, Orlando, FL 32806 <br/> <a href="tel:+14072031512"> +1 (407) 203 1512</a>  <br/> Authentic Mexican flavor, family tradition, and the best tacos in Orlando. <br/> Closed Sundays, but always ready to cater your weekday fiestas.',
      },
    },
    notes: {
      title: 'NOTES & CONDITIONS',
      description:
        'This form serves as a catering request only. <br/> We require at least 24 hours’ notice for all orders to ensure fresh preparation. <br/> Once submitted, a member of our team will contact you for confirmation. <br/>  If you don’t hear back within 48 hours, please reach out directly at: <br/> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=losamecastaqueria@outlook.com" target="_blank" rel="noopener noreferrer">📧 losamecastaqueria@outlook.com</a> <br/> <a href="tel:+14072031512"> 📞+1 (407) 203 1512</a> <br/> Los Amecas Restaurante y Taquería – 3558 S Orange Ave, Orlando FL 32806 <br/>  Authentic Mexican flavor, family tradition, and the best tacos in Orlando.',
    },
  },
  info: {
    hero: {
      title:
        "Welcome to <img src='/plate.webp' alt='Informacion de Los Amecas' width='64' height='64' class='w-18 h-18 inline'/> Los Amecas <br/> Restaurante y Taquería <img src='/plate.webp' alt='Informacion de Los Amecas' width='64' height='64' class='w-18 h-18 inline'/>",
      button: 'Order Now',
    },
    description: {
      text: 'Since opening our doors in Orlando, Florida, Los Amecas has been dedicated to bringing you the true flavors of Mexico, fresh, homemade, and full of heart. <br/>  Our mission is simple: to serve delicious, authentic food made with love, just like at home. Every taco, every plate, every salsa is prepared daily using traditional recipes that have been part of our family for generations.<br/> From our famous tacos de asada, barbacoa, and pastor to flavorful seafood favorites like camarones a la diabla and mojarra frita, we bring a piece of Mexico to your table with every bite. Whether you’re joining us for lunch, dinner, or catering your next event, we make sure you feel right at home. <br/> Our guests love the friendly service, generous portions, and the cozy atmosphere that make Los Amecas more than a restaurant. It’s a place where friends and families gather to celebrate, share stories, and enjoy good food together.',
      schedules: {
        title:
          "Come and taste why locals call <br/> <span class='text-accent-3'>us the best tacos in Orlando.</span>",
        hours: {
          title: 'Hours',
          content:
            'Monday to Thursday and Sundays: 9:00 AM to 9:00 PM <br/> Friday and Saturday: 9:00 AM to 9:30 PM',
        },
        location: {
          title: 'Location',
          content: '3558 S Orange Ave, Orlando, FL 32806',
        },
        contact: {
          title: 'Contact us',
          content:
            ' Follow us on social media for daily specials, photos, and community events. <br/>Authentic Mexican Flavor. Family Tradition. Orlando’s Favorite Taquería.',
        },
      },
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
          href: 'https://www.clover.com/online-ordering/los-amecas-restaurante-orlando',
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
