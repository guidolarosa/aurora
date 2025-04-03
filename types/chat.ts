import { Message } from "./message";
import { User } from "./user";

export type Chat = {
  id: string;
  participants: User[];
  messages: Message[];
};