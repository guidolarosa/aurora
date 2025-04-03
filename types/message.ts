import { User } from "./user";

export type Message = {
  id: string;
  content: string;
  timestamp: Date;
  sender: User;
};