import { CalendarEvent } from "@/components/ui/full-calendar";

export const party: CalendarEvent[] = [
  {
    id: '20',
    start: new Date('2025-01-01T03:00:00Z'), // UTC-3 for Argentina
    end: new Date('2025-01-01T02:59:59Z'),
    title: 'Reunión en Unidad Básica',
    color: 'purple',
  },
];

export default party;
