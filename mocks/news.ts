const newsItems = [
  {
    id: 1,
    title: "Encuentro Nacional de la Juventud Peronista en Buenos Aires",
    shortDescription: "Más de 1000 jóvenes militantes se reunieron para debatir el futuro del movimiento y sus principios fundamentales",
    content: "El encuentro, que tuvo lugar en el histórico Teatro Cervantes, contó con la participación de referentes históricos del movimiento y nuevas figuras emergentes...",
    thumbnailUrl: "/images/news/juventud-peronista-2024.jpg",
    fullImageUrl: "/images/news/juventud-peronista-2024-full.jpg",
    isFeatured: true,
    publishDate: "2024-02-15T10:00:00Z",
    categories: ["Política", "Juventud", "Eventos"],
    tags: ["juventud peronista", "militancia", "doctrina peronista", "encuentro nacional"],
    author: {
      id: 1,
      name: "María González",
      role: "Corresponsal Principal",
      avatarUrl: "/images/authors/maria-gonzalez.jpg"
    },
    peopleMentioned: [
      {
        id: 1,
        name: "Juan Pérez",
        role: "Secretario General",
        organization: "Juventud Peronista"
      },
      {
        id: 2,
        name: "Laura Rodríguez",
        role: "Coordinadora Nacional",
        organization: "Movimiento Evita"
      }
    ],
    location: {
      city: "Buenos Aires",
      province: "Buenos Aires",
      venue: "Teatro Cervantes"
    },
    relatedDocuments: [
      {
        id: 1,
        title: "Documento Final del Encuentro",
        url: "/documents/encuentro-2024.pdf"
      }
    ],
    socialStats: {
      views: 1200,
      shares: 450,
      comments: 85
    }
  },
  {
    id: 2,
    title: "Nueva Sede Social Inaugurada en Córdoba",
    shortDescription: "La organización expande su presencia territorial con una moderna sede que servirá como espacio de encuentro y formación",
    content: "La nueva sede, ubicada en el corazón de la ciudad mediterránea, cuenta con instalaciones para capacitación, biblioteca y salón de usos múltiples...",
    thumbnailUrl: "/images/news/sede-cordoba.jpg",
    fullImageUrl: "/images/news/sede-cordoba-full.jpg",
    isFeatured: false,
    publishDate: "2024-02-10T15:30:00Z",
    categories: ["Institucional", "Infraestructura"],
    tags: ["nueva sede", "córdoba", "desarrollo territorial", "formación política"],
    author: {
      id: 2,
      name: "Carlos Martínez",
      role: "Corresponsal Regional",
      avatarUrl: "/images/authors/carlos-martinez.jpg"
    },
    peopleMentioned: [
      {
        id: 3,
        name: "Ana Fernández",
        role: "Delegada Regional",
        organization: "Principios y Valores"
      }
    ],
    location: {
      city: "Córdoba",
      province: "Córdoba",
      venue: "Nueva Sede Social"
    },
    relatedDocuments: [],
    socialStats: {
      views: 850,
      shares: 230,
      comments: 45
    }
  },
  {
    id: 3,
    title: "Lanzamiento del Programa de Capacitación Digital",
    shortDescription: "Nuevo programa busca fortalecer las habilidades tecnológicas de los militantes",
    content: "El programa incluye cursos de redes sociales, comunicación digital y herramientas colaborativas...",
    thumbnailUrl: "/images/news/capacitacion-digital.jpg",
    fullImageUrl: "/images/news/capacitacion-digital-full.jpg",
    isFeatured: true,
    publishDate: "2024-02-08T09:00:00Z",
    categories: ["Educación", "Tecnología"],
    tags: ["capacitación", "digital", "formación", "tecnología"],
    author: {
      id: 3,
      name: "Patricia López",
      role: "Editora de Tecnología",
      avatarUrl: "/images/authors/patricia-lopez.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Virtual",
      province: "Nacional",
      venue: "Plataforma Online"
    },
    relatedDocuments: [],
    socialStats: {
      views: 950,
      shares: 320,
      comments: 65
    }
  },
  {
    id: 4,
    title: "Conmemoración del Día de la Lealtad",
    shortDescription: "Miles de militantes se reunieron para celebrar el histórico 17 de octubre",
    content: "La Plaza de Mayo fue el escenario de una masiva concentración que recordó los valores fundamentales del movimiento...",
    thumbnailUrl: "/images/news/dia-lealtad.jpg",
    fullImageUrl: "/images/news/dia-lealtad-full.jpg",
    isFeatured: true,
    publishDate: "2024-02-05T18:00:00Z",
    categories: ["Historia", "Eventos"],
    tags: ["17 de octubre", "día de la lealtad", "plaza de mayo"],
    author: {
      id: 4,
      name: "Roberto Sánchez",
      role: "Cronista Principal",
      avatarUrl: "/images/authors/roberto-sanchez.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Buenos Aires",
      province: "Buenos Aires",
      venue: "Plaza de Mayo"
    },
    relatedDocuments: [],
    socialStats: {
      views: 2500,
      shares: 890,
      comments: 156
    }
  },
  {
    id: 5,
    title: "Nuevo Plan de Acción Social en Barrios Populares",
    shortDescription: "Se lanza iniciativa para fortalecer el trabajo territorial en comunidades vulnerables",
    content: "El plan incluye mejoras en comedores comunitarios, apoyo escolar y atención sanitaria básica...",
    thumbnailUrl: "/images/news/accion-social.jpg",
    fullImageUrl: "/images/news/accion-social-full.jpg",
    isFeatured: false,
    publishDate: "2024-02-03T11:30:00Z",
    categories: ["Social", "Territorio"],
    tags: ["acción social", "barrios populares", "solidaridad"],
    author: {
      id: 5,
      name: "Lucía Ramírez",
      role: "Corresponsal Social",
      avatarUrl: "/images/authors/lucia-ramirez.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "La Matanza",
      province: "Buenos Aires",
      venue: "Varios Barrios"
    },
    relatedDocuments: [],
    socialStats: {
      views: 780,
      shares: 245,
      comments: 42
    }
  },
  {
    id: 6,
    title: "Debate sobre Políticas de Género en la Militancia",
    shortDescription: "Referentes feministas del movimiento analizan avances y desafíos pendientes",
    content: "El encuentro abordó temas como paridad en cargos directivos y protocolos contra la violencia de género...",
    thumbnailUrl: "/images/news/debate-genero.jpg",
    fullImageUrl: "/images/news/debate-genero-full.jpg",
    isFeatured: false,
    publishDate: "2024-02-01T14:00:00Z",
    categories: ["Género", "Debate"],
    tags: ["feminismo", "igualdad", "paridad"],
    author: {
      id: 6,
      name: "Elena Torres",
      role: "Especialista en Género",
      avatarUrl: "/images/authors/elena-torres.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Rosario",
      province: "Santa Fe",
      venue: "Centro Cultural"
    },
    relatedDocuments: [],
    socialStats: {
      views: 920,
      shares: 310,
      comments: 88
    }
  },
  {
    id: 7,
    title: "Presentación del Libro 'Doctrina y Actualidad'",
    shortDescription: "Nueva publicación analiza la vigencia del pensamiento peronista en el siglo XXI",
    content: "El libro reúne ensayos de destacados intelectuales sobre la adaptación de la doctrina a los desafíos contemporáneos...",
    thumbnailUrl: "/images/news/libro-doctrina.jpg",
    fullImageUrl: "/images/news/libro-doctrina-full.jpg",
    isFeatured: true,
    publishDate: "2024-01-30T16:00:00Z",
    categories: ["Cultura", "Doctrina"],
    tags: ["libro", "pensamiento", "doctrina"],
    author: {
      id: 7,
      name: "Miguel Ángel Pérez",
      role: "Editor Cultural",
      avatarUrl: "/images/authors/miguel-perez.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Buenos Aires",
      province: "Buenos Aires",
      venue: "Biblioteca Nacional"
    },
    relatedDocuments: [],
    socialStats: {
      views: 650,
      shares: 180,
      comments: 35
    }
  },
  {
    id: 8,
    title: "Jornada de Formación Sindical",
    shortDescription: "Trabajadores y dirigentes participan en talleres sobre derechos laborales",
    content: "La jornada incluyó capacitaciones sobre negociación colectiva y nuevas formas de organización laboral...",
    thumbnailUrl: "/images/news/formacion-sindical.jpg",
    fullImageUrl: "/images/news/formacion-sindical-full.jpg",
    isFeatured: false,
    publishDate: "2024-01-28T13:00:00Z",
    categories: ["Sindical", "Formación"],
    tags: ["sindicatos", "trabajo", "derechos laborales"],
    author: {
      id: 8,
      name: "Jorge Gutiérrez",
      role: "Corresponsal Sindical",
      avatarUrl: "/images/authors/jorge-gutierrez.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Avellaneda",
      province: "Buenos Aires",
      venue: "CGT Regional"
    },
    relatedDocuments: [],
    socialStats: {
      views: 580,
      shares: 145,
      comments: 28
    }
  },
  {
    id: 9,
    title: "Encuentro Internacional de Movimientos Populares",
    shortDescription: "Delegaciones de América Latina debaten sobre integración regional",
    content: "El encuentro fortaleció lazos entre organizaciones populares de diferentes países del continente...",
    thumbnailUrl: "/images/news/encuentro-internacional.jpg",
    fullImageUrl: "/images/news/encuentro-internacional-full.jpg",
    isFeatured: true,
    publishDate: "2024-01-25T10:00:00Z",
    categories: ["Internacional", "Política"],
    tags: ["integración", "latinoamérica", "movimientos populares"],
    author: {
      id: 9,
      name: "Diana Méndez",
      role: "Corresponsal Internacional",
      avatarUrl: "/images/authors/diana-mendez.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Buenos Aires",
      province: "Buenos Aires",
      venue: "Hotel Bauen"
    },
    relatedDocuments: [],
    socialStats: {
      views: 1100,
      shares: 420,
      comments: 95
    }
  },
  {
    id: 10,
    title: "Lanzamiento de Radio Comunitaria",
    shortDescription: "Nueva emisora fortalecerá la comunicación popular en el conurbano",
    content: "La radio comenzará sus transmisiones con programación las 24 horas y contenido producido por la comunidad...",
    thumbnailUrl: "/images/news/radio-comunitaria.jpg",
    fullImageUrl: "/images/news/radio-comunitaria-full.jpg",
    isFeatured: false,
    publishDate: "2024-01-23T12:00:00Z",
    categories: ["Comunicación", "Comunidad"],
    tags: ["radio", "medios populares", "comunicación"],
    author: {
      id: 10,
      name: "Fernando Silva",
      role: "Editor de Medios",
      avatarUrl: "/images/authors/fernando-silva.jpg"
    },
    peopleMentioned: [],
    location: {
      city: "Quilmes",
      province: "Buenos Aires",
      venue: "Centro Cultural Popular"
    },
    relatedDocuments: [],
    socialStats: {
      views: 480,
      shares: 150,
      comments: 32
    }
  }
];

export default newsItems;

