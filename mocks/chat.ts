import { User } from "@/types/user";

export type Message = {
  id: string;
  content: string;
  timestamp: Date;
  sender: User;
};

export type Chat = {
  id: string;
  participants: User[];
  messages: Message[];
};

const user1: User = {
  id: "1",
  name: "Juan Pérez",
  avatar: "/avatars/juan.jpg"
};

const user2: User = {
  id: "2", 
  name: "María García",
  avatar: "/avatars/maria.jpg"
};

export const peronistChat: Chat = {
  id: "peronist-doctrine-01",
  participants: [user1, user2],
  messages: [
    {
      id: "1",
      content: "¿Cuáles son los pilares fundamentales de la doctrina peronista?",
      timestamp: new Date("2025-01-15T14:30:00Z"),
      sender: user1
    },
    {
      id: "2",
      content: "La doctrina peronista se basa en tres pilares: la justicia social, la independencia económica y la soberanía política.",
      timestamp: new Date("2025-01-15T14:32:00Z"), 
      sender: user2
    },
    {
      id: "3",
      content: "¿Y cómo se relacionan estos conceptos con la comunidad organizada?",
      timestamp: new Date("2025-01-15T14:35:00Z"),
      sender: user1
    },
    {
      id: "4",
      content: "La comunidad organizada es el ideal de una sociedad donde el pueblo está unido y trabaja en armonía. Los tres pilares son la base para lograr esta organización social.",
      timestamp: new Date("2025-01-15T14:38:00Z"),
      sender: user2
    },
    {
      id: "5",
      content: "Interesante. ¿Y qué papel juega el movimiento obrero en todo esto?",
      timestamp: new Date("2025-01-15T14:40:00Z"),
      sender: user1
    },
    {
      id: "6",
      content: "El movimiento obrero es fundamental. Perón consideraba que los trabajadores organizados eran la columna vertebral del movimiento y la base para alcanzar la justicia social.",
      timestamp: new Date("2025-01-15T14:43:00Z"),
      sender: user2
    }
  ]
};

export default peronistChat;
