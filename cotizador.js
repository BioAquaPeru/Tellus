const BUSINESS = {
  name: 'Tellus Industrias',
  slogan: 'Lockers metálicos premium',
  address: 'Lima, Perú',
  phones: ['+51 999 999 999', '+51 988 888 888'],
  email: 'ventas@tellusindustrias.com',
  website: 'www.telluslocker.com',
  logo: 'assets/logo-tellus.png',
};

const COMPANY_PROFILES = {
  tellus: {
    id: 'tellus',
    name: 'Tellus Industrias',
    displayName: 'Tellus',
    slogan: 'Lockers metálicos',
    address: 'Lima, Perú',
    phones: ['+51 999 999 999', '+51 988 888 888'],
    email: 'ventas@tellusindustrias.com',
    website: 'www.telluslocker.com',
    logo: 'assets/logo-tellus.png',
    prefix: 'TEL',
    color: '#173021',
    color2: '#284f39',
    accent: '#173021',
    table: '#173021',
  },
  arlima: {
    id: 'arlima',
    name: 'ARLIMA LOCKER',
    displayName: 'ARLIMA',
    slogan: '',
    address: 'Av. Argentina 308-Bellota II - Lima',
    phones: ['+51 906 609 721'],
    email: 'armlima@gmail.com',
    website: '',
    logo: 'assets/arlima-logo.svg',
    prefix: 'ARL',
    color: '#101010',
    color2: '#2b2b2b',
    accent: '#C636D3',
    table: '#E152C6',
  },
};

Object.assign(BUSINESS, COMPANY_PROFILES.tellus);

const PRODUCT_DATABASE = [
  {
    id: 'locker-1c-1',
    name: 'Locker de 1 cuerpo 1 casillero',
    defaultPrice: '1200',
    imageUrl: 'assets/lock/1-1.JPG',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  
  {
    id: 'locker-1c-2',
    name: 'Locker de 1 cuerpo 2 casilleros',
    defaultPrice: '80',
    imageUrl: 'assets/lock/1-2.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
  
  {
    id: 'locker-1c-3',
    name: 'Locker de 1 cuerpo 3 casilleros',
    defaultPrice: '120',
    imageUrl: 'assets/lock/1-3.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
  
  {
    id: 'locker-1c-4',
    name: 'Locker de 1 cuerpo 4 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/1-4.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
  
  {
    id: 'locker-1c-5',
    name: 'Locker de 1 cuerpo 5 casilleros',
    defaultPrice: '200',
    imageUrl: 'assets/lock/1-5.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },


  
  {
    id: 'locker-2c-2',
    name: 'Locker de 2 cuerpos 2 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/2-2.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-2c-4',
    name: 'Locker de 2 cuerpos 4 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/2-4.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
  
 {
    id: 'locker-2c-6',
    name: 'Locker de 2 cuerpos 6 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/2-6.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
   {
    id: 'locker-2c-8',
    name: 'Locker de 2 cuerpos 8 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/2-8.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-2c-10',
    name: 'Locker de 2 cuerpos 10 casilleros',
    defaultPrice: '338.98',
    imageUrl: 'assets/lock/2-10.jpg',
    thickness: '0.6 mm',
    measures: {
      alto: '1.80 mts',
      ancho: '0.65 mts',
      fondo: '0.38 mts',
    },
    color: 'Gris',
    characteristics: [
      '10 puertas de alto 32.5 cm x 30 cm de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },



  {
    id: 'locker-3c-3',
    name: 'Locker de 3 cuerpos 3 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/3-3.png',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

   {
    id: 'locker-3c-6',
    name: 'Locker de 3 cuerpos 6 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/3-6.png',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

   {
    id: 'locker-3c-9',
    name: 'Locker de 3 cuerpos 9 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/3-9.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

   {
    id: 'locker-3c-12',
    name: 'Locker de 3 cuerpos 12 casilleros',
    defaultPrice: '406.78',
    imageUrl: 'assets/lock/3-12.jpg',
    thickness: '0.6 mm',
    measures: {
      alto: '1.80 mts',
      ancho: '1.01 mts',
      fondo: '0.38 mts',
    },
    color: 'Gris',
    characteristics: [
      '12 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

   {
    id: 'locker-3c-15',
    name: 'Locker de 3 cuerpos 15 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/3-15.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },




  {
    id: 'locker-4c-4',
    name: 'Locker de 4 cuerpos 4 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/4-4.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
  {
    id: 'locker-4c-8',
    name: 'Locker de 4 cuerpos 8 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/4-8.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-4c-12',
    name: 'Locker de 4 cuerpos 12 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/4-12.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-4c-16',
    name: 'Locker de 4 cuerpos 16 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/4-16.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-4c-20',
    name: 'Locker de 4 cuerpos 20 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/4-20.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-5c-5',
    name: 'Locker de 5 cuerpos 5 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/5-5.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },
  {
    id: 'locker-5c-10',
    name: 'Locker de 5 cuerpos 10 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/5-10.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-5c-15',
    name: 'Locker de 5 cuerpos 15 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/5-15.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-5c-20',
    name: 'Locker de 5 cuerpos 20 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/5-20.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },

  {
    id: 'locker-5c-25',
    name: 'Locker de 5 cuerpos 25 casilleros',
    defaultPrice: '160',
    imageUrl: 'assets/lock/5-25.jpg',
    thickness: '0.6mm',
    measures: {
      alto: '1.80mts',
      ancho: '1.65mts',
      fondo: '0.38mts',
    },
    color: 'Gris',
    characteristics: [
      '20 puertas de alto 40.5 x 0.30 de ancho',
      'Patas de 10 cm empotradas',
      'Color gris, horneada en 180 grados',
      'Manijas cromadas',
      'Puertas con refuerzo en U en la parte interna',
      'Puerta con chapa candado',
      'Rejillas de ventilacion',
      'Tarjetero de identificacion',
      'Ventilacion en puertas con ranuras inferiores',
      'Fabricado en plancha de acero SIDER - LAF',
    ],
    recommendation: 'Se recomienda evitar guardar en lugares húmedos.',
    hasDetail: true,
  },



  {
    id: 'transporte',
    name: 'Transporte',
    defaultPrice: '70',
    thickness: '',
    measures: { alto: '', ancho: '', fondo: '' },
    color: '',
    characteristics: [],
    recommendation: '',
    hasDetail: false,
  },
];

const BANK_DATABASE = [
  { id: 'bcpMIGUEL', label: 'BCP MIGUEL', logo: 'assets/bancos/bcp.svg', holder: 'Eduardo Miguel Peña Quintana', cc: '19111697745002', cci: '00219111169774500255' },
  { id: 'interbank', label: 'Interbank', logo: 'assets/bancos/interbank.svg', holder: 'Tellus Engineer S.A.C.', cc: '99999898989', cci: '989898989898' },
  { id: 'scotiabank', label: 'Scotiabank', logo: 'assets/bancos/scotiabank.svg', holder: 'Tellus Engineer S.A.C.', cc: '99999898989', cci: '989898989898' },
  { id: 'bbva', label: 'BBVA LAN', logo: 'assets/bancos/bbva.svg', holder: 'Tellus Engineer S.A.C.', cc: '99999898989', cci: '989898989898' },
  { id: 'bbva2', label: 'BBVA EDUAR', logo: 'assets/bancos/bbva.svg', holder: 'Tellus Engineer S.A.C.', cc: '99999898989', cci: '989898989898' },
  { id: 'bbva3', label: 'BBVA DIANA', logo: 'assets/bancos/bbva.svg', holder: 'Tellus Engineer S.A.C.', cc: '99999898989', cci: '989898989898' },
];

const state = {
  companyId: 'tellus',
  quoteCode: '',
  items: [],
  selectedBanks: [],
};



const money = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
});

const loginScreen = document.getElementById('loginScreen');
const workspace = document.getElementById('workspace');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const productSelect = document.getElementById('productSelect');
const itemsEditor = document.getElementById('itemsEditor');
const bankOptions = document.getElementById('bankOptions');
const quotePreview = document.getElementById('quotePreview');
const quoteCodeLabel = document.getElementById('quoteCodeLabel');
const companySwitcher = document.getElementById('companySwitcher');

const fieldIds = [
  'clientName',
  'clientDoc',
  'clientAddress',
  'igvRate',
  'discountEnabled',
  'discountAmount',
  'observations',
  'paymentMode',
  'paymentManual',
  'executionMode',
  'executionManual',
  'warranty',
];

const getField = (id) => document.getElementById(id);

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const sanitizeFilename = (value = '') => String(value)
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[\\/:*?"<>|]+/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const generateQuoteCode = () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const serial = String(Date.now()).slice(-5);
  return `${BUSINESS.prefix || 'TL'}-${y}${m}-${serial}`;
};

const todayText = () => new Date().toLocaleDateString('es-PE', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const directDriveUrl = (url) => {
  const match = String(url || '').match(/\/d\/([^/]+)|id=([^&]+)/);
  const id = match?.[1] || match?.[2];
  return id ? `https://drive.google.com/uc?export=view&id=${id}` : url;
};

const resolveImageSource = (item) => {
  if (item.imageDataUrl) {
    return item.imageDataUrl;
  }

  const rawSource = String(item.imageUrl || '').trim();
  if (!rawSource) {
    return '';
  }

  if (rawSource.startsWith('http')) {
    return directDriveUrl(rawSource);
  }

  if (rawSource.startsWith('assets/') || rawSource.startsWith('data:')) {
    return rawSource;
  }

  return `assets/lockers/${rawSource}`;
};

const productSpecText = (item) => {
  const lines = [
    item.thickness || item.color
      ? `Espesor: ${item.thickness || '-'} | Color: ${item.color || '-'}`
      : '',
    item.measures?.alto || item.measures?.ancho || item.measures?.fondo
      ? `Medidas: alto ${item.measures.alto || '-'} / ancho ${item.measures.ancho || '-'} / fondo ${item.measures.fondo || '-'}`
      : '',
  ].filter(Boolean);
  return lines.map((line) => `<span class="product-spec">${escapeHtml(line)}</span>`).join('');
};

const isMobilityItem = (item) => {
  const text = `${item.id || ''} ${item.name || ''}`.toLowerCase();
  return text.includes('transporte') || text.includes('movilidad');
};

const getFormData = () => ({
  clientName: getField('clientName').value.trim(),
  clientDoc: getField('clientDoc').value.trim(),
  clientAddress: getField('clientAddress').value.trim(),
  igvRate: Number(getField('igvRate').value || 0),
  discountEnabled: getField('discountEnabled').checked,
  discountAmount: Number(getField('discountAmount').value || 0),
  observations: getField('observations').value.trim(),
  paymentMode: getField('paymentMode').value,
  paymentManual: getField('paymentManual').value.trim(),
  executionMode: getField('executionMode').value,
  executionManual: getField('executionManual').value.trim(),
  warranty: getField('warranty').value.trim(),
});

const calculateTotals = (data) => {
  const taxableItems = state.items.filter((item) => !isMobilityItem(item));
  const mobilitySubtotal = state.items
    .filter((item) => isMobilityItem(item))
    .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const subtotal = taxableItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const discount = data.discountEnabled ? Math.min(data.discountAmount, subtotal) : 0;
  const taxable = Math.max(subtotal - discount, 0);
  const igv = taxable * (data.igvRate / 100);
  return {
    subtotal,
    discount,
    igv,
    mobilitySubtotal,
    total: taxable + igv + mobilitySubtotal,
  };
};

const splitQuoteItems = (items) => {
  const fullPageCapacity = 11;
  const finalPageCapacity = 5;

  if (items.length <= finalPageCapacity) {
    return [items];
  }

  const pageCount = Math.ceil(Math.max(items.length - finalPageCapacity, 0) / fullPageCapacity) + 1;
  const pages = [];
  let offset = 0;
  let remaining = items.length;

  for (let index = 0; index < pageCount; index += 1) {
    const pagesLeft = pageCount - index;
    const isFinal = index === pageCount - 1;
    const capacity = isFinal ? finalPageCapacity : fullPageCapacity;
    const minimumForNextPages = isFinal ? 0 : finalPageCapacity * (pagesLeft - 1);
    const take = Math.min(capacity, Math.max(1, remaining - minimumForNextPages));

    pages.push(items.slice(offset, offset + take));
    offset += take;
    remaining -= take;
  }

  return pages.filter((page) => page.length > 0);
};

const tintColor = (hex, alpha) => {
  const clean = String(hex).replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const applyCompanyProfile = () => {
  const profile = COMPANY_PROFILES[state.companyId] || COMPANY_PROFILES.tellus;
  Object.assign(BUSINESS, profile);

  document.documentElement.style.setProperty('--forest', BUSINESS.color);
  document.documentElement.style.setProperty('--forest-2', BUSINESS.color2);
  document.documentElement.style.setProperty('--gold', BUSINESS.accent);
  document.documentElement.style.setProperty('--table-color', BUSINESS.table);
  document.documentElement.style.setProperty('--soft-gold', tintColor(BUSINESS.accent, 0.1));

  document.querySelectorAll('.panel-brand img, .login-brand img').forEach((img) => {
    img.src = BUSINESS.logo;
    img.alt = BUSINESS.name;
  });

  document.querySelectorAll('.panel-brand strong, .login-brand p').forEach((node) => {
    node.textContent = BUSINESS.name;
  });

  document.querySelectorAll('.panel-brand span').forEach((node) => {
    node.textContent = BUSINESS.slogan || '';
  });

  document.querySelectorAll('.login-brand span').forEach((node) => {
    node.textContent = BUSINESS.slogan || 'Cotizaciones profesionales';
  });
};

const renderCompanySwitcher = () => {
  if (!companySwitcher) return;

  companySwitcher.innerHTML = Object.values(COMPANY_PROFILES).map((company) => `
    <button class="company-option ${company.id === state.companyId ? 'is-active' : ''}" type="button" data-company-id="${company.id}">
      ${company.displayName}
    </button>
  `).join('');
};

const pageFooter = (page, totalPages) => `
  <footer class="page-footer">
    ${BUSINESS.website
      ? `<a href="https://${BUSINESS.website}" target="_blank" rel="noreferrer">${BUSINESS.website}</a>`
      : `<span>${BUSINESS.email}</span>`}
    <span>Página ${page} de ${totalPages}</span>
  </footer>
`;

const coverHeader = () => `
  <header class="cover-head">
    <div class="quote-logo">
      <img src="${BUSINESS.logo}" alt="${BUSINESS.name}">
      <div>
        <strong>${BUSINESS.name}</strong>
        <span>${BUSINESS.slogan}</span>
      </div>
    </div>
    <div class="quote-title">
      <h2>Cotización</h2>
      <p>${BUSINESS.address}</p>
      <p>${BUSINESS.phones.join(' / ')}</p>
      <p>${BUSINESS.email}</p>
    </div>
    <div class="quote-meta">
      <p><strong>Codigo:</strong> ${state.quoteCode}</p>
      <p><strong>Fecha:</strong> ${todayText()}</p>
    </div>
  </header>
`;

const compactHeader = () => `
  <header class="compact-head">
    <div class="quote-logo">
      <img src="${BUSINESS.logo}" alt="${BUSINESS.name}">
      <div>
        <strong>${BUSINESS.name}</strong>
        <span>${BUSINESS.slogan}</span>
      </div>
    </div>
    <div class="compact-contact">
      <div>${BUSINESS.address}</div>
      <div>${BUSINESS.phones.join(' / ')}</div>
      <div>${BUSINESS.email}</div>
    </div>
  </header>
`;

const renderCoverPage = (data, page, totalPages) => `
  <section class="pdf-page">
    ${coverHeader()}
    <section class="client-block">
      <h3>Datos del cliente</h3>
      <p><strong>Señor(es):</strong><span>${escapeHtml(data.clientName || '-')}</span></p>
      <p><strong>RUC/DNI:</strong><span>${escapeHtml(data.clientDoc || '-')}</span></p>
      <p><strong>Dirección:</strong><span>${escapeHtml(data.clientAddress || '-')}</span></p>
    </section>
    <section class="presentation">
      <h3>Estimados señores</h3>
      <p>Por medio de la presente, hacemos llegar nuestra propuesta de mobiliario metálico para la organización y resguardo de equipos, indumentaria, materiales de escritorio y mobiliario de oficina. Fabricamos lockers en medidas estándar y especiales, cuidando la resistencia, funcionalidad y acabado final de cada pieza para entregar una solución profesional y alineada a las necesidades de su proyecto.</p>
    </section>
    ${pageFooter(page, totalPages)}
  </section>
`;

const renderQuotePage = (data, totals, page, totalPages, items, startIndex, isFinalQuotePage, quotePageIndex) => {
  const execution = data.executionMode === 'manual'
    ? data.executionManual || '-'
    : 'Inmediato';
  const paymentCondition = data.paymentMode === 'manual'
    ? data.paymentManual || '-'
    : data.paymentMode;
  const selectedBanks = BANK_DATABASE.filter((bank) => state.selectedBanks.includes(bank.id));
  const mobilityItems = state.items.filter((item) => isMobilityItem(item));

  return `
    <section class="pdf-page quote-page">
      ${compactHeader()}
      <h2 class="quote-page-title">Detalle de cotización${quotePageIndex > 0 ? ' - continuación' : ''}</h2>
      <table class="quote-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descripción de Producto</th>
            <th class="center">Cant.</th>
            <th class="money">Precio Unitario</th>
            <th class="money">Precio Total</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item, index) => `
            <tr>
              <td>${startIndex + index + 1}</td>
              <td><span class="product-name">${escapeHtml(item.name)}</span>${productSpecText(item)}</td>
              <td class="center">${item.quantity}</td>
              <td class="money">${money.format(item.unitPrice)}</td>
              <td class="money">${money.format(item.quantity * item.unitPrice)}</td>
            </tr>
          `).join('') || '<tr><td colspan="5">Sin productos agregados.</td></tr>'}
        </tbody>
      </table>

      ${isFinalQuotePage ? `
        <section class="quote-summary-grid">
          <div class="quote-observations">
            <h3 class="quote-section-title">Observaciones</h3>
            <p>${escapeHtml(data.observations || '-')}</p>
          </div>
          <div class="totals-box">
            <p><span>Subtotal</span><strong>${money.format(totals.subtotal)}</strong></p>
            ${data.discountEnabled ? `<p><span>Descuento</span><strong>${money.format(totals.discount)}</strong></p>` : ''}
            <p><span>IGV</span><strong>${money.format(totals.igv)}</strong></p>
            <p><span>Total</span><strong>${money.format(totals.total - totals.mobilitySubtotal)}</strong></p>
          </div>
        </section>

        ${mobilityItems.length ? `
          <section class="mobility-box">
            <h3 class="quote-section-title">Movilidad</h3>
            <p>Servicio de movilidad puesto en dirección, considerado sin emisión de factura.</p>
            <table class="mobility-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Descripción</th>
                  <th class="money">Precio</th>
                </tr>
              </thead>
              <tbody>
                ${mobilityItems.map((item, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${escapeHtml(item.name || 'Movilidad puesta en dirección')}</td>
                    <td class="money">${money.format(item.quantity * item.unitPrice)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </section>
        ` : ''}

        <section class="conditions">
          <h3 class="quote-section-title">Condiciones de venta</h3>
          <ul>
            <li>Condición de pago: ${escapeHtml(paymentCondition)}.</li>
            <li>Tiempo de ejecución: ${escapeHtml(execution)}.</li>
            <li>Tiempo de garantía: ${escapeHtml(data.warranty || '-')}.</li>
            <li>Cotización sujeta a disponibilidad y stock de metal.</li>
          </ul>
        </section>

        <section class="bank-list">
          <h3 class="quote-section-title">Cuentas bancarias</h3>
          ${selectedBanks.map((bank) => `
            <article class="bank-item">
              <div class="bank-logo"><img src="${bank.logo}" alt="${bank.label}"></div>
              <div>
                <p><strong>Titular:</strong> ${bank.holder}</p>
                <p><strong>CC:</strong> ${bank.cc}</p>
                <p><strong>CCI:</strong> ${bank.cci}</p>
              </div>
            </article>
          `).join('') || '<p>No se seleccionaron cuentas bancarias.</p>'}
        </section>
      ` : '<p class="quote-continue-note">La cotización continúa en la siguiente página.</p>'}

      ${pageFooter(page, totalPages)}
    </section>
  `;
};

const renderDetailPage = (item, page, totalPages) => `
  <section class="pdf-page">
    ${compactHeader()}
    <h2 class="detail-title">${escapeHtml(item.name)}</h2>
    <section class="detail-grid">
      <div class="detail-image">
        ${resolveImageSource(item) ? `<img src="${resolveImageSource(item)}" alt="${escapeHtml(item.name)}">` : '<span>Imagen pendiente</span>'}
      </div>
      <div class="detail-list">
        <div class="detail-card">
          <h3>Espesor</h3>
          <p>${escapeHtml(item.thickness || '-')}</p>
        </div>
        <div class="detail-card">
          <h3>Medidas</h3>
          <p>Alto: ${escapeHtml(item.measures.alto || '-')}</p>
          <p>Ancho: ${escapeHtml(item.measures.ancho || '-')}</p>
          <p>Fondo: ${escapeHtml(item.measures.fondo || '-')}</p>
        </div>
        <div class="detail-card">
          <h3>Características</h3>
          <ul>${item.characteristics.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>
        </div>
      </div>
    </section>
    <section class="recommendation">
      <h3>Recomendación</h3>
      <p>${escapeHtml(item.recommendation || '-')}</p>
    </section>
    ${pageFooter(page, totalPages)}
  </section>
`;

const renderPreview = () => {
  const data = getFormData();
  const totals = calculateTotals(data);
  const detailItems = state.items.filter((item) => item.hasDetail);
  const taxableQuoteItems = state.items.filter((item) => !isMobilityItem(item));
  const quoteItemPages = splitQuoteItems(taxableQuoteItems);
  const totalPages = 1 + quoteItemPages.length + detailItems.length;
  let page = 1;
  const coverPage = renderCoverPage(data, page++, totalPages);
  let startIndex = 0;
  const quotePages = quoteItemPages.map((items, index) => {
    const html = renderQuotePage(data, totals, page++, totalPages, items, startIndex, index === quoteItemPages.length - 1, index);
    startIndex += items.length;
    return html;
  });

  quoteCodeLabel.textContent = state.quoteCode;
  quotePreview.innerHTML = [
    coverPage,
    ...quotePages,
    ...detailItems.map((item) => renderDetailPage(item, page++, totalPages)),
  ].join('');
};

const renderItemsEditor = () => {
  itemsEditor.innerHTML = state.items.map((item, index) => `
    <article class="item-editor">
      <div class="item-summary">
        <div>
          <strong>${index + 1}. ${escapeHtml(item.name)}</strong>
          <small>Cant. ${item.quantity} | P. Unit. ${money.format(item.unitPrice)}</small>
        </div>
        <div class="item-actions">
          <button class="ghost-button" type="button" data-toggle-index="${index}">${item.expanded ? 'Ocultar' : 'Editar'}</button>
          <button class="icon-button" type="button" data-remove-index="${index}" aria-label="Quitar producto">x</button>
        </div>
      </div>
      ${item.expanded ? `
        <div class="item-body">
          <label class="full">Nombre
            <input type="text" value="${escapeHtml(item.name)}" data-item-field="name" data-index="${index}">
          </label>
          <label>Cant.
            <input type="number" min="1" step="1" value="${item.quantity}" data-item-field="quantity" data-index="${index}">
          </label>
          <label>P. Unit.
            <input type="number" min="0" step="0.01" value="${item.unitPrice}" data-item-field="unitPrice" data-index="${index}">
          </label>
          <span></span>
          ${item.hasDetail ? `
            <div class="item-detail-grid">
              <label>Espesor
                <input type="text" value="${escapeHtml(item.thickness)}" data-item-field="thickness" data-index="${index}">
              </label>
              <label>Alto
                <input type="text" value="${escapeHtml(item.measures.alto)}" data-item-field="measures.alto" data-index="${index}">
              </label>
              <label>Ancho
                <input type="text" value="${escapeHtml(item.measures.ancho)}" data-item-field="measures.ancho" data-index="${index}">
              </label>
              <label>Fondo
                <input type="text" value="${escapeHtml(item.measures.fondo)}" data-item-field="measures.fondo" data-index="${index}">
              </label>
              <label>Color
                <input type="text" value="${escapeHtml(item.color)}" data-item-field="color" data-index="${index}">
              </label>
              <label class="full">Imagen desde carpeta assets/lockers
                <input type="text" value="${escapeHtml(item.imageUrl)}" placeholder="Ejemplo: locker-20.png o assets/lockers/locker-20.png" data-item-field="imageUrl" data-index="${index}">
                <span class="file-hint">Recomendado: guarda el PNG en assets/lockers y escribe solo el nombre del archivo. Tambien acepta URL publica de Drive, pero para PDF es mas estable usar archivo local.</span>
              </label>
              <label class="full">Adjuntar imagen para esta cotización
                <input type="file" accept="image/png,image/jpeg,image/webp" data-image-upload="${index}">
              </label>
              <label class="full">Características
                <textarea rows="5" data-item-field="characteristics" data-index="${index}">${escapeHtml(item.characteristics.join('\n'))}</textarea>
              </label>
              <label class="full">Recomendación
                <textarea rows="2" data-item-field="recommendation" data-index="${index}">${escapeHtml(item.recommendation)}</textarea>
              </label>
            </div>
          ` : '<small class="full">Este concepto no genera página de detalle.</small>'}
        </div>
      ` : ''}
    </article>
  `).join('');
  renderPreview();
};

const renderBankOptions = () => {
  bankOptions.innerHTML = BANK_DATABASE.map((bank) => `
    <label>
      <input type="checkbox" value="${bank.id}" ${state.selectedBanks.includes(bank.id) ? 'checked' : ''}>
      ${bank.label}
    </label>
  `).join('');
};

const addProduct = () => {
  const product = PRODUCT_DATABASE.find((entry) => entry.id === productSelect.value);
  if (!product) return;

  state.items.push({
    ...structuredClone(product),
    quantity: 1,
    unitPrice: Number(product.defaultPrice || 0),
    expanded: false,
    imageDataUrl: '',
  });
  renderItemsEditor();
};

const initProducts = () => {
  productSelect.innerHTML = PRODUCT_DATABASE.map((product) => `
    <option value="${product.id}">${product.name}</option>
  `).join('');
};

const bindEvents = () => {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(loginForm);
    if (data.get('usuario') === 'admin' && data.get('password') === 'eduargarcia') {
      sessionStorage.setItem('tellusQuoteAuth', 'true');
      loginScreen.classList.add('hidden');
      workspace.classList.remove('hidden');
      renderPreview();
      return;
    }
    loginError.textContent = 'Usuario o contraseña incorrectos.';
  });

  document.getElementById('logoutButton').addEventListener('click', () => {
    sessionStorage.removeItem('tellusQuoteAuth');
    workspace.classList.add('hidden');
    loginScreen.classList.remove('hidden');
  });

  companySwitcher.addEventListener('click', (event) => {
    const companyId = event.target.dataset.companyId;
    if (!companyId || companyId === state.companyId) return;

    state.companyId = companyId;
    applyCompanyProfile();
    renderCompanySwitcher();
    state.quoteCode = generateQuoteCode();
    document.title = `Cotizador | ${BUSINESS.name}`;
    renderPreview();
  });

  document.getElementById('addProductButton').addEventListener('click', addProduct);

  document.getElementById('newQuoteButton').addEventListener('click', () => {
    state.quoteCode = generateQuoteCode();
    renderPreview();
  });

  document.getElementById('downloadPdfButton').addEventListener('click', async () => {
    renderPreview();
    const data = getFormData();
    const clientName = sanitizeFilename(data.clientName || 'Cliente');
    const filename = `${clientName} - ${state.quoteCode}.pdf`;
    document.title = `${clientName} - ${state.quoteCode}`;

    if (window.html2pdf) {
      await window.html2pdf().set({
        margin: 0,
        filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
        },
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'], after: '.pdf-page' },
      }).from(quotePreview).save();
      return;
    }

    window.print();
  });

  document.getElementById('discountEnabled').addEventListener('change', (event) => {
    document.getElementById('discountField').classList.toggle('hidden', !event.target.checked);
    renderPreview();
  });

  document.getElementById('executionMode').addEventListener('change', (event) => {
    document.getElementById('executionManualField').classList.toggle('hidden', event.target.value !== 'manual');
    renderPreview();
  });

  document.getElementById('paymentMode').addEventListener('change', (event) => {
    document.getElementById('paymentManualField').classList.toggle('hidden', event.target.value !== 'manual');
    renderPreview();
  });

  fieldIds.forEach((id) => {
    const field = getField(id);
    field.addEventListener('input', renderPreview);
    field.addEventListener('change', renderPreview);
  });

  itemsEditor.addEventListener('input', (event) => {
    const index = Number(event.target.dataset.index);
    const field = event.target.dataset.itemField;
    if (!Number.isNaN(index) && field) {
      if (field === 'quantity' || field === 'unitPrice') {
        state.items[index][field] = Number(event.target.value || 0);
      } else if (field === 'characteristics') {
        state.items[index].characteristics = event.target.value.split('\n').map((line) => line.trim()).filter(Boolean);
      } else if (field.startsWith('measures.')) {
        const key = field.split('.')[1];
        state.items[index].measures[key] = event.target.value;
      } else {
        state.items[index][field] = event.target.value;
      }
      renderPreview();
    }
  });

  itemsEditor.addEventListener('click', (event) => {
    const toggleIndex = Number(event.target.dataset.toggleIndex);
    if (!Number.isNaN(toggleIndex)) {
      state.items[toggleIndex].expanded = !state.items[toggleIndex].expanded;
      renderItemsEditor();
      return;
    }

    const index = Number(event.target.dataset.removeIndex);
    if (!Number.isNaN(index)) {
      state.items.splice(index, 1);
      renderItemsEditor();
    }
  });

  itemsEditor.addEventListener('change', (event) => {
    const index = Number(event.target.dataset.imageUpload);
    const file = event.target.files?.[0];

    if (Number.isNaN(index) || !file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      state.items[index].imageDataUrl = reader.result;
      renderPreview();
    });
    reader.readAsDataURL(file);
  });

  bankOptions.addEventListener('change', () => {
    state.selectedBanks = [...bankOptions.querySelectorAll('input:checked')].map((input) => input.value);
    renderPreview();
  });
};

const init = () => {
  applyCompanyProfile();
  renderCompanySwitcher();
  state.quoteCode = generateQuoteCode();
  initProducts();
  renderBankOptions();
  bindEvents();

  if (sessionStorage.getItem('tellusQuoteAuth') === 'true') {
    loginScreen.classList.add('hidden');
    workspace.classList.remove('hidden');
  }
  renderPreview();
};

init();
