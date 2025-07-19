import { dateUtils } from '@ivongr/calendar';
import { getMonth } from 'date-fns';

import { Cells } from '../cells/cells';

export const Months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];
export function Month({
  border,
  value,
  className,
  height,
}: {
  border?: string;
  value: Date;
  className?: string;
  height?: string;
}) {
  const isDateInCurrentMonth = (monthIndex: number) => {
    const currentMonth = getMonth(value);
    return currentMonth === monthIndex;
  };
  const today = dateUtils.toUser(value, 'year');
  return (
    <>
      <label className='pl-2 font-semibold text-xs'>{today}</label>
      <div className='grid grid-cols-3'>
        {Months.map((month, index) => (
          <Cells
            className={`text-center ${className}`}
            border={border}
            key={index}
            value={month}
            isActive={isDateInCurrentMonth(index)}
          />
        ))}
      </div>
    </>
  );
}
