import { useState, useEffect } from 'react';

import { CalendarMonth } from '../calendar-month';

export function Year({
  initialYear = new Date().getFullYear(),
  border,
  onChange,
}: {
  initialYear?: number;
  border?: string;
  onChange?: (value: Date) => void;
}) {
  const [currentYear, setCurrentYear] = useState(initialYear);

  useEffect(() => {
    setCurrentYear(initialYear);
  }, [initialYear]);

  const monthsOfYear = Array.from({ length: 12 }, (_, index) => {
    return new Date(currentYear, index, 1);
  });

  return (
    <div className='p-4 overflow-auto h-full'>
      <h2 className='text-2xl font-bold mb-6 text-center text-black'>{currentYear}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {monthsOfYear.map((monthDate, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-full max-w-[280px] min-w-[240px]'>
              <CalendarMonth
                value={monthDate}
                border={border}
                size='w-full'
                onChange={onChange}
                showLabel={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
