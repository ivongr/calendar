import { IEvent } from '@ivongr/calendar';
import {
  addDays,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  setDate,
  startOfMonth,
  startOfWeek,
  subDays,
} from 'date-fns';
import { useState } from 'react';

import { getEventsForDate } from '../../../utils/get-appointments-for-date';
import { Cells } from '../cells/cells';

export function Days({
  data,
  offDay,
  className,
  border,
  value,
  onChange,
  onSelectDayEvents,
}: {
  data?: IEvent[];
  offDay?: string[];
  className?: string;
  border?: string;
  value: Date;
  onChange?: (date: Date) => void;
  onSelectDayEvents?: (events: IEvent[]) => void;
}) {
  const [dateClick, setDateClick] = useState<Date>();

  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const now = new Date();
  const prefixDays = (startDate.getDay() + 6) % 7;
  const numDays = differenceInDays(endDate, startDate) + 1;
  const suffixDays = 7 - ((endDate.getDay() + 6) % 7) - 1;

  const rangeWeek = {
    start: startOfWeek(now, { weekStartsOn: 0 }),
    end: endOfWeek(now, { weekStartsOn: 0 }),
  };

  const handleClickDate = (date: Date, appointments: IEvent[]) => {
    setDateClick(date);
    if (typeof onChange == 'function') {
      onChange(date);
    }
    if (typeof onSelectDayEvents === 'function') {
      onSelectDayEvents(appointments);
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
        const dayAppointments = getEventsForDate({
          events: data || [],
          targetDate: dayDate,
        });
        const isHolidayDate = isHoliday(dayDate);
        return (
          <Cells
            key={`prefix-${index}`}
            value={dayDate.getDate()}
            isActive={isCurrentDate(dayDate)}
            dateClick={dateClick}
            border={border}
            className={`${className} opacity-50 ${isHolidayDate ? 'bg-red-50' : ''}`}
            onClick={() => handleClickDate(dayDate, dayAppointments)}
            currentDate={format(dayDate, 'yyyy-MM-dd')}
            offDay={offDay}
            rangeWeek={rangeWeek}
          />
        );
      })}

      {/* Días del mes actual */}
      {Array.from({ length: numDays }).map((_, index) => {
        const dayNumber = index + 1;
        const dayDate = setDate(value, dayNumber);
        const isSelectedDate = dateClick ? isSameDay(dateClick, dayDate) : false;
        const dayAppointments = getEventsForDate({
          events: data || [],
          targetDate: dayDate,
        });
        return (
          <Cells
            key={`day-${dayNumber}`}
            value={dayNumber}
            offDay={offDay}
            isActive={isCurrentDate(dayDate)}
            isDate={isSelectedDate}
            border={border}
            className={className}
            rangeWeek={rangeWeek}
            onClick={() => handleClickDate(dayDate, dayAppointments)}
            currentDate={format(dayDate, 'yyyy-MM-dd')}
          />
        );
      })}

      {/* Días del mes siguiente */}
      {Array.from({ length: suffixDays }).map((_, index) => {
        const dayDate = addDays(endDate, index + 1);
        const isHolidayDate = isHoliday(dayDate);
        const dayAppointments = getEventsForDate({
          events: data || [],
          targetDate: dayDate,
        });
        return (
          <Cells
            key={`suffix-${index}`}
            value={dayDate.getDate()}
            isActive={isCurrentDate(dayDate)}
            border={border}
            className={`${className} opacity-50 ${isHolidayDate ? 'bg-red-50' : ''}`}
            onClick={() => handleClickDate(dayDate, dayAppointments)}
            currentDate={format(dayDate, 'yyyy-MM-dd')}
            offDay={offDay}
            rangeWeek={rangeWeek}
          />
        );
      })}
    </>
  );
}
