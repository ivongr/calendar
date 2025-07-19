import { IEvent } from '@ivongr/calendar';
import { isSameDay } from 'date-fns';

export function Cells({
  startDate,
  border = '',
  events,
  className = '',
  value,
  isActive,
  onClick,
}: {
  startDate?: Date;
  border?: string;
  className?: string;
  events?: IEvent[];
  value: number | string;
  height?: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  const eventsForDay =
    events?.filter((event) => {
      if (!startDate || !event.date) return false;
      return isSameDay(new Date(event.date.from), startDate);
    }) || [];

  const hasEvents = eventsForDay.length > 0;
  const maxVisibleEvents = 3;
  const visibleAppointments = events?.slice(0, maxVisibleEvents) || [];
  const hiddenEventsCount = (events?.length || 0) - maxVisibleEvents;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={
        `${border} ${className} h-full relative transition-colors select-none ` +
        (!isActive ? 'hover:bg-gray-100 active:bg-blue-200' : 'bg-[#c0e4ffab]')
      }
    >
      <div className='absolute top-1 right-1 text-xs text-black'>{value}</div>

      <div className='pt-5 '>
        {hasEvents && (
          <ul className='space-y-0.5 px-0.5'>
            {visibleAppointments.map((appointment, index) => (
              <li key={index}>mostras datos </li>
            ))}
            {hiddenEventsCount > 0 && (
              <div className='text-center bg-neutral-200 rounded-sm '>+ {hiddenEventsCount}</div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
