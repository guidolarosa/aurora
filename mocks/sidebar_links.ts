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
        url: "/",
        icon: HomeIcon,
      },
      {
        title: "Noticias",
        url: "/news",
        icon: Newspaper,
      },
      {
        title: "Foros",
        url: "/forum",
        icon: MessagesSquare,
      },
      {
        title: "Votaciones",
        url: "/vote",
        icon: Vote,
      },
      {
        title: "Chat",
        url: "/chat",
        icon: MessageSquareMore,
      },
      {
        title: "Calendario",
        url: "/calendar",
        icon: Calendar,
      },
      {
        title: "Documentos",
        url: "/documents",
        icon: File,
      },
    ]
  },
  {
    label: "Ajustes",
    links: [
      {
        title: "Perfil",
        url: "/profile",
        icon: User,
      },
    ]
  }
];

export default items;
