import { IconChevronLeft, IconChevronRight } from '@ivongr/calendar';

export function Toolbar({
  className,
  date,
  setDate,
  onMonthNavigation,
}: {
  className?: string;
  date: Date;
  setDate: (date: Date) => void;
  onMonthNavigation?: (targetDate: Date) => void;
}) {
  const handleMonthNavigation = (direction: 'prev' | 'next') => {
    const newDate = new Date(date);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }

    setDate(newDate);
    if (onMonthNavigation) {
      onMonthNavigation(newDate);
    }
  };

  const goToToday = () => {
    const today = new Date();
    setDate(today);
    if (onMonthNavigation) {
      onMonthNavigation(today);
    }
  };

  return (
    <div className='flex items-center'>
      <button onClick={() => handleMonthNavigation('prev')}>
        <IconChevronLeft />
      </button>

      <button onClick={goToToday} className='bg-blue-400 w-12 rounded-sm'>
        Hoy
      </button>

      <button onClick={() => handleMonthNavigation('next')}>
        <IconChevronRight />
      </button>
    </div>
  );
}
