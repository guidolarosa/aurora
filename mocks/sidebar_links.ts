import { Home, MessageSquareText, MessagesSquare, Vote } from "lucide-react";

import { MessageSquareMore } from "lucide-react";

import { Scroll } from "lucide-react";

import { User } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
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
  // {
  //   title: "Proyectos",
  //   url: "#",
  //   icon: Scroll,
  // },
  {
    title: "Mi Perfil",
    url: "/profile",
    icon: User,
  },
];

export default items;
