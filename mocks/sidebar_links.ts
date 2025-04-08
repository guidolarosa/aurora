import {
  MessagesSquare,
  Vote,
  Calendar,
  MessageSquareMore,
  User,
  Newspaper,
  File,
  HomeIcon,
} from "lucide-react";

const items = [
  {
    label: "Menú Principal",
    links: [
      {
        title: "Inicio",
        url: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "Noticias",
        url: "/dashboard/news",
        icon: Newspaper,
      },
      {
        title: "Foros",
        url: "/dashboard/forum",
        icon: MessagesSquare,
      },
      {
        title: "Votaciones",
        url: "/dashboard/vote",
        icon: Vote,
      },
      {
        title: "Chat",
        url: "/dashboard/chat",
        icon: MessageSquareMore,
      },
      {
        title: "Calendario",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
      {
        title: "Documentos",
        url: "/dashboard/documents",
        icon: File,
      },
    ]
  },
  {
    label: "Ajustes",
    links: [
      {
        title: "Perfil",
        url: "/dashboard/profile",
        icon: User,
      },
    ]
  }
];

export default items;
