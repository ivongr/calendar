import { cn, IconChevronLeft, IconChevronRight } from '@ivongr/calendar';
import { addWeeks, endOfWeek, format, startOfWeek, subWeeks } from 'date-fns';
import { es } from 'date-fns/locale';

export function ToolbarWeek({
  className,
  week,
  setWeek,
  onWeekNavigation,
}: {
  className?: string;
  week: Date;
  setWeek: (date: Date) => void;
  onWeekNavigation?: (targetDate: Date) => void;
}) {
  const handleWeekNavigation = (direction: 'prev' | 'next') => {
    const newWeek =
      direction === 'prev' ? subWeeks(week ?? new Date(), 1) : addWeeks(week ?? new Date(), 1);
    console.log(newWeek);

    setWeek(newWeek);
    if (onWeekNavigation) {
      onWeekNavigation(newWeek);
    }
  };

  const goToCurrentWeek = () => {
    const currentDate = new Date();
    setWeek(currentDate);
    if (onWeekNavigation) {
      onWeekNavigation(currentDate);
    }
  };

  const startOfCurrentWeek = startOfWeek(week ?? new Date(), {
    weekStartsOn: 0,
  });
  const endOfCurrentWeek = endOfWeek(week ?? new Date(), { weekStartsOn: 0 });

  const formatWeekRange = () => {
    if (startOfCurrentWeek.getMonth() === endOfCurrentWeek.getMonth()) {
      return `${format(startOfCurrentWeek, 'd', { locale: es })} - ${format(
        endOfCurrentWeek,
        'd MMM yyyy',
        { locale: es }
      )}`;
    } else if (startOfCurrentWeek.getFullYear() === endOfCurrentWeek.getFullYear()) {
      return `${format(startOfCurrentWeek, 'd MMM', { locale: es })} - ${format(
        endOfCurrentWeek,
        'd MMM yyyy',
        { locale: es }
      )}`;
    } else {
      return `${format(startOfCurrentWeek, 'd MMM yyyy', {
        locale: es,
      })} - ${format(endOfCurrentWeek, 'd MMM yyyy', { locale: es })}`;
    }
  };

  return (
    <div
      className={cn(
        `flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2`,
        className
      )}
    >
      <div className='flex items-center space-x-2'>
        <button onClick={() => handleWeekNavigation('prev')} aria-label='Semana anterior'>
          <IconChevronLeft />
        </button>

        <button onClick={goToCurrentWeek} className='bg-blue-400'>
          Hoy
        </button>

        <button onClick={() => handleWeekNavigation('next')} aria-label='Semana siguiente'>
          <IconChevronRight />
        </button>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='text-lg font-semibold text-gray-800'>{formatWeekRange()}</div>

        <div className='text-sm text-gray-500'>
          Semana {format(week ?? new Date(), 'w', { locale: es })}
        </div>
      </div>
    </div>
  );
}
