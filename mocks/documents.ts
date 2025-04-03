const documents = [
  {
    id: 1,
    title: "20 Verdades Peronistas - Documento Histórico",
    type: "pdf",
    url: "/documents/20-verdades-peronistas.pdf",
    description: "Documento histórico que enumera los principios fundamentales del movimiento peronista",
    uploadDate: "2024-01-15T08:30:00Z",
    categories: ["Doctrina", "Historia", "Fundamentos"],
    uploader: {
      id: 1,
      name: "Carlos García Jr.",
      role: "Archivista Digital",
      avatarUrl: "https://i.pravatar.cc/150?img=3"
    },
    fileSize: "2.4MB",
    downloads: 1250
  },
  {
    id: 2,
    title: "Discurso Histórico 17 de Octubre - Video Restaurado",
    type: "video",
    url: "https://youtube.com/watch?v=abc123xyz",
    description: "Video restaurado del histórico discurso del 17 de octubre de 1945",
    uploadDate: "2024-02-01T14:15:00Z",
    categories: ["Multimedia", "Historia", "Discursos"],
    uploader: {
      id: 2,
      name: "Ana María Picasso",
      role: "Coordinadora Audiovisual",
      avatarUrl: "https://i.pravatar.cc/150?img=4"
    },
    duration: "45:30",
    views: 3500
  },
  {
    id: 3,
    title: "Plan Quinquenal 2024-2029",
    type: "document",
    url: "https://docs.google.com/document/d/abc123",
    description: "Documento colaborativo con las propuestas y objetivos para el próximo quinquenio",
    uploadDate: "2024-03-01T10:00:00Z",
    categories: ["Planificación", "Política", "Desarrollo"],
    uploader: {
      id: 3,
      name: "Roberto Lavagna",
      role: "Asesor Económico",
      avatarUrl: "https://i.pravatar.cc/150?img=5"
    },
    lastModified: "2024-03-10T15:20:00Z",
    contributors: 15
  },
  {
    id: 4,
    title: "Manual de Procedimientos - Unidades Básicas",
    type: "pdf",
    url: "/documents/manual-ub-2024.pdf",
    description: "Guía actualizada para la gestión y organización de unidades básicas",
    uploadDate: "2024-02-20T09:45:00Z",
    categories: ["Organización", "Procedimientos", "Unidades Básicas"],
    uploader: {
      id: 4,
      name: "Cristina Kirchner",
      role: "Coordinadora de UBs",
      avatarUrl: "https://i.pravatar.cc/150?img=6"
    },
    fileSize: "5.1MB",
    downloads: 875
  },
  {
    id: 5,
    title: "Repositorio de Imágenes Históricas",
    type: "link",
    url: "https://archivo-historico-peronista.org/imagenes",
    description: "Colección digital de fotografías históricas del movimiento",
    uploadDate: "2024-01-30T11:20:00Z",
    categories: ["Archivo", "Historia", "Fotografía"],
    uploader: {
      id: 5,
      name: "Diego Maradona Jr.",
      role: "Curador Digital",
      avatarUrl: "https://i.pravatar.cc/150?img=7"
    },
    itemCount: 2500,
    lastUpdated: "2024-03-15T16:30:00Z"
  }
];

export default documents;
