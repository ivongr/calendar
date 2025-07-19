import { IEvent } from '@ivongr/calendar';

export function getEventsForDate({ targetDate, events }: { targetDate: Date; events: IEvent[] }) {
  return events.filter((event) => {
    const eventDate = new Date(event.date.from);
    return (
      eventDate.getDate() === targetDate.getDate() &&
      eventDate.getMonth() === targetDate.getMonth() &&
      eventDate.getFullYear() === targetDate.getFullYear()
    );
  });
}
