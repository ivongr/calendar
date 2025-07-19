import { cn, IconChevronLeft, IconChevronRight } from '@ivongr/calendar';

export function ToolbarYear({
  className,
  year = new Date().getFullYear(),
  setYear,
  onYearNavigation,
}: {
  className?: string;
  year?: number;
  setYear: (year: number) => void;
  onYearNavigation?: (targetYear: number) => void;
}) {
  const handleYearNavigation = (direction: 'prev' | 'next') => {
    const newYear = direction === 'prev' ? year - 1 : year + 1;

    setYear(newYear);
    if (onYearNavigation) {
      onYearNavigation(newYear);
    }
  };
  const goToCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
    if (onYearNavigation) {
      onYearNavigation(currentYear);
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
        <button onClick={() => handleYearNavigation('prev')} aria-label='Año anterior'>
          <IconChevronLeft />
        </button>

        <button onClick={goToCurrentYear} className='bg-blue-400 w-12 rounded-sm'>
          Hoy
        </button>

        <button onClick={() => handleYearNavigation('next')} aria-label='Año siguiente'>
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}
