import { cn } from '@ivongr/calendar';

export function HeadWeek({ border = '', className }: { border?: string; className?: string }) {
  const weeks = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <>
      {weeks.map((week) => (
        <div
          key={`${week}-week`}
          className={cn('text-center truncate text-black', border, className)}
        >
          {week}
        </div>
      ))}
    </>
  );
}
