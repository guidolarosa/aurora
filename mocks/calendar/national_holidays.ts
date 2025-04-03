import { CalendarEvent } from "@/components/ui/full-calendar";

export const nationalHolidays: CalendarEvent[] = [
  {
    id: '1',
    start: new Date('2025-01-01T03:00:00Z'), // UTC-3 for Argentina
    end: new Date('2025-01-02T02:59:59Z'),
    title: 'Año Nuevo',
    color: 'blue',
  },
  {
    id: '2',
    start: new Date('2025-02-12T03:00:00Z'),
    end: new Date('2025-02-14T02:59:59Z'),
    title: 'Carnaval',
    color: 'blue',
  },
  {
    id: '3',
    start: new Date('2025-03-24T03:00:00Z'),
    end: new Date('2025-03-25T02:59:59Z'),
    title: 'Día Nacional de la Memoria por la Verdad y la Justicia',
    color: 'blue',
  },
  {
    id: '4',
    start: new Date('2025-04-02T03:00:00Z'),
    end: new Date('2025-04-03T02:59:59Z'),
    title: 'Día del Veterano y de los Caídos en la Guerra de Malvinas',
    color: 'blue',
  },
  {
    id: '5',
    start: new Date('2025-05-01T03:00:00Z'),
    end: new Date('2025-05-02T02:59:59Z'),
    title: 'Día del Trabajador',
    color: 'blue',
  },
  {
    id: '6',
    start: new Date('2025-05-25T03:00:00Z'),
    end: new Date('2025-05-26T02:59:59Z'),
    title: 'Día de la Revolución de Mayo',
    color: 'blue',
  },
  {
    id: '7',
    start: new Date('2025-06-17T03:00:00Z'),
    end: new Date('2025-06-18T02:59:59Z'),
    title: 'Paso a la Inmortalidad del General Martín Miguel de Güemes',
    color: 'blue',
  },
  {
    id: '8',
    start: new Date('2025-06-20T03:00:00Z'),
    end: new Date('2025-06-21T02:59:59Z'),
    title: 'Paso a la Inmortalidad del General Manuel Belgrano',
    color: 'blue',
  },
  {
    id: '9',
    start: new Date('2025-07-09T03:00:00Z'),
    end: new Date('2025-07-10T02:59:59Z'),
    title: 'Día de la Independencia',
    color: 'blue',
  },
  {
    id: '10',
    start: new Date('2025-08-17T03:00:00Z'),
    end: new Date('2025-08-18T02:59:59Z'),
    title: 'Paso a la Inmortalidad del General José de San Martín',
    color: 'blue',
  },
  {
    id: '11',
    start: new Date('2025-10-12T03:00:00Z'),
    end: new Date('2025-10-13T02:59:59Z'),
    title: 'Día del Respeto a la Diversidad Cultural',
    color: 'blue',
  },
  {
    id: '12',
    start: new Date('2025-11-20T03:00:00Z'),
    end: new Date('2025-11-21T02:59:59Z'),
    title: 'Día de la Soberanía Nacional',
    color: 'blue',
  },
  {
    id: '13',
    start: new Date('2025-12-08T03:00:00Z'),
    end: new Date('2025-12-09T02:59:59Z'),
    title: 'Inmaculada Concepción de María',
    color: 'blue',
  },
  {
    id: '14',
    start: new Date('2025-12-25T03:00:00Z'),
    end: new Date('2025-12-26T02:59:59Z'),
    title: 'Navidad',
    color: 'blue',
  }
];

export default nationalHolidays;
