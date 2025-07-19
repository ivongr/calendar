import {
  addDays,
  differenceInDays,
  endOfMonth,
  format,
  isSameDay,
  setDate,
  startOfMonth,
  subDays,
} from 'date-fns';
import { IEvent } from '@ivongr/calendar';

import { Cells } from '../cells/cells';
import { getEventsForDate } from '../../../utils/get-appointments-for-date';

export function Days({
  offDay,
  dataEvents,
  className,
  border = '',
  value,
  height,
  onChange,
  onSelectDayEvents,
}: {
  offDay?: string[];
  dataEvents?: IEvent[];
  className?: string;
  border?: string;
  value: Date;
  height?: string;
  onChange?: (date: Date) => void;
  onSelectDayEvents?: (events: IEvent[]) => void;
}) {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const prefixDays = (startDate.getDay() + 6) % 7;
  const numDays = differenceInDays(endDate, startDate) + 1;
  const suffixDays = (7 - ((endDate.getDay() + 6) % 7) - 1) % 7;

  const handleClickDate = (date: Date, events: IEvent[]) => {
    if (typeof onChange === 'function') {
      onChange(date);
    }

    if (typeof onSelectDayEvents === 'function') {
      onSelectDayEvents(events);
    }
  };

  const isCurrentDate = (date: Date): boolean => {
    const today = new Date();
    return isSameDay(date, today);
  };

  const isHoliday = (date: Date): boolean => {
    const dateString = format(date, 'yyyy-MM-dd');
    return offDay?.includes(dateString) || false;
  };

  return (
    <>
      {/* Días del mes anterior */}
      {Array.from({ length: prefixDays }).map((_, index) => {
        const dayDate = subDays(startDate, prefixDays - index);
        const dayEvents = getEventsForDate({
          events: dataEvents || [],
          targetDate: dayDate,
        });
        const isHolidayDate = isHoliday(dayDate);
        return (
          <Cells
            key={`prefix-${index}`}
            value={dayDate.getDate()}
            isActive={isCurrentDate(dayDate)}
            border={border}
            height={height}
            className={`${className} opacity-50`}
            events={dayEvents}
            onClick={() => handleClickDate(dayDate, dayEvents)}
          />
        );
      })}

      {/* Días del mes actual */}
      {Array.from({ length: numDays }).map((_, index) => {
        const dayNumber = index + 1;
        const dayDate = setDate(value, dayNumber);
        const dayEvents = getEventsForDate({
          events: dataEvents || [],
          targetDate: dayDate,
        });
        return (
          <Cells
            startDate={startDate}
            key={`day-${dayNumber}`}
            value={dayNumber}
            isActive={isCurrentDate(dayDate)}
            border={border}
            className={className}
            height={height}
            events={dayEvents}
            onClick={() => handleClickDate(dayDate, dayEvents)}
          />
        );
      })}

      {/* Días del mes siguiente */}
      {Array.from({ length: suffixDays }).map((_, index) => {
        const dayDate = addDays(endDate, index + 1);
        const dayEvents = getEventsForDate({
          events: dataEvents || [],
          targetDate: dayDate,
        });
        const isHolidayDate = isHoliday(dayDate);
        return (
          <Cells
            key={`suffix-${index}`}
            value={dayDate.getDate()}
            isActive={isCurrentDate(dayDate)}
            border={border}
            height={height}
            className={`${className} opacity-50 ${isHolidayDate ? 'bg-red-50' : ''}`}
            events={dayEvents}
            onClick={() => handleClickDate(dayDate, dayEvents)}
          />
        );
      })}
    </>
  );
}
