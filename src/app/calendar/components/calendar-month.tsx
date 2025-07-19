import { dateUtils, IEvent } from '@ivongr/calendar';

import { Days } from './calendar-picker/days/days';
import { HeadWeek } from './calendar-picker/week/head-week';

export function CalendarMonth({
  event: data,
  border,
  offDay,
  value,
  className,
  showLabel = true,
  onChange,
  onSelectDayEvents: onSelectDayEvents,
}: {
  event?: IEvent[];
  border?: string;
  offDay?: string[];
  value?: Date;
  className?: string;
  showLabel?: boolean;
  size?: string;
  onChange?: (value: Date) => void;
  onSelectDayEvents?: (events: IEvent[]) => void;
}) {
  const today = dateUtils.toUser(value || new Date(), 'month');

  return (
    <div className='p-5'>
      {showLabel ? (
        <label className={`pl-2 capitalize font-semibold text-xs text-black`}>{today}</label>
      ) : null}
      <div className={`${className} `}>
        <div
          className={`grid grid-cols-7 items-center justify-center text-center p-1 size-30 w-full
            ${className}`}
        >
          <HeadWeek border={border} />
          <Days
            data={data}
            value={value || new Date()}
            offDay={offDay}
            border={border}
            onChange={onChange}
            onSelectDayEvents={onSelectDayEvents}
          />
        </div>
      </div>
    </div>
  );
}
