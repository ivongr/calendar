import { cn } from '@ivongr/calendar';

export function Cells({
  offDay,
  className = '',
  border,
  value,
  isActive,
  isDate,
  onClick,
  currentDate,
  rangeWeek,
}: {
  className?: string;
  border?: string;
  offDay?: string[];
  value?: number | string;
  isActive?: boolean;
  isDate?: boolean;
  dateClick?: Date;
  onClick?: () => void;
  currentDate?: string;
  rangeWeek?: { start: Date; end: Date };
}) {
  const isHoliday = currentDate && offDay?.includes(currentDate);

  const isInWeekRangeDirect = (() => {
    if (!currentDate || !rangeWeek?.start || !rangeWeek?.end) return false;

    const normalizeDate = (date: Date): Date => {
      const normalized = new Date(date);
      normalized.setHours(0, 0, 0, 0);
      return normalized;
    };

    const cellDate = normalizeDate(new Date(currentDate));
    const startDate = normalizeDate(rangeWeek.start);
    const endDate = normalizeDate(rangeWeek.end);
    return cellDate >= startDate && cellDate <= endDate;
  })();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        `transition-colors relative text-black w-full h-8 flex items-center justify-center text-sm`,
        border || '',
        isHoliday
          ? 'text-black-500 opacity-60 cursor-pointer hover:bg-gray-100 active:bg-gray-200'
          : !isActive
          ? 'cursor-pointer hover:bg-gray-100 active:bg-gray-200'
          : 'font-bold text-white bg-blue-300 cursor-pointer',
        isDate
          ? 'font-bold text-white  bg-blue-400 cursor-pointer'
          : isInWeekRangeDirect && !isActive
          ? ' bg-blue-200'
          : '',
        className
      )}
    >
      {isHoliday ? (
        <div className='relative flex items-center justify-center w-full h-full'>
          <div className='absolute top-1 right-1 rounded-full  bg-blue-900 h-1.5 w-1.5' />
          <span className='text-center'>{value}</span>
        </div>
      ) : (
        <span className='text-center truncate'>{value}</span>
      )}
    </div>
  );
}
