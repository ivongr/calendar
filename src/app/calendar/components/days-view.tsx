import { differenceInDays, endOfMonth, startOfMonth } from 'date-fns';

const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function DaysView({ datec = new Date(), size = 'size-1' }: { datec?: Date; size?: string }) {
  const startDate = startOfMonth(datec);
  const endDate = endOfMonth(datec);
  const prefixDays = startDate.getDay();
  const numDays = differenceInDays(endDate, startDate) + 1;

  return (
    <>
      <div className={`${size} border-t border-l`}>
        <div className='grid grid-cols-7 items-center justify-center text-center'>
          {Array.from({ length: prefixDays }).map((_, index) => (
            <div className='h-10 border-b border-r flex items-center justify-center select-none transition-colors cursor-pointer hover:bg-gray-100 active:bg-gray-200'>
              {index}
            </div>
          ))}
          {weeks.map((week) => (
            <div className='h-10 border-b border-r flex items-center justify-center select-none transition-colors cursor-pointer hover:bg-gray-100 active:bg-gray-200'>
              {week}
            </div>
          ))}

          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;

            return (
              <div className='h-10 border-b border-r flex items-center justify-center select-none transition-colors cursor-pointer hover:bg-gray-100 active:bg-gray-200'>
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
