import { dateUtils, IEvent } from '@ivongr/calendar';

import { Days } from './days/days';
import { HeadWeek } from '../calendar-picker/week/head-week';

export function BigCalendar({
  border = '',
  event,
  offDay,
  value,
  onChange,
  onSelectDayAppointments,
}: {
  border?: string;
  event: IEvent[];
  offDay?: string[];
  value?: Date;
  onChange?: (value: Date) => void;
  onSelectDayAppointments?: (events: IEvent[]) => void;
}) {
  const today = dateUtils.toUser(value || new Date(), 'monthYear');

  return (
    <div>
      <label className='capitalize font-semibold text-xs sm:text-sm text-black'>{today}</label>

      <div
        className={`grid grid-cols-7 min-w-0 ${
          border || 'border border-gray-300'
        } h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]`}
      >
        <HeadWeek border={border} />

        <Days
          dataEvents={event}
          value={value || new Date()}
          offDay={offDay}
          border={border}
          className='bg-surface'
          onChange={onChange}
          onSelectDayEvents={onSelectDayAppointments}
        />
      </div>
    </div>
  );
}

export function InfoAppointment({ events }: { events: IEvent[] }) {
  if (!events || events.length === 0) {
    return <div className='text-gray-400 text-sm px-4 py-2'>Sin eventos</div>;
  }

  return (
    <>
      {events.map((event, i) => {
        return (
          <div
            key={i}
            className='bg-blue-50 border-l-4 p-2 rounded shadow-sm'
            style={{
              borderLeftColor: '#3b82f6',
            }}
          >
            <div className='flex gap-2'>
              <ul className='shrink-0'>
                <li className='text-xs'>{dateUtils.toUser(event.date.from, 'time')}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
