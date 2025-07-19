'use client';

import { dateUtils, IEvent, ToggleExpand } from '@ivongr/calendar';
import { useState } from 'react';

import {
  IconSidebarLeftCollapse,
  IconSidebarLeftExpand,
} from '../../../libs/calendar/src/lib/shared/components/icons';
import { BigCalendar, InfoAppointment } from './components/big-calendar/big-calendar';
import { CalendarMonth } from './components/calendar-month';
import { Toolbar } from './components/calendar-picker/toolbar/toolbar';
import { ToolbarYear } from './components/calendar-picker/toolbar/toolbar-year';
import { Year } from './components/year/year';

export enum CalendarView {
  month = 'month',
  year = 'year',
}

export type View = 'month' | 'year';

export function Calendar({
  events,

  defaultView = CalendarView.month,
  views,
}: {
  events?: IEvent[];

  defaultView?: CalendarView;
  views?: string[];
}) {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(defaultView);
  const [selectDateEvents, setSelectDayEvents] = useState<IEvent[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const handleYearChange = (year: number) => {
    const newDate = new Date(date);
    newDate.setFullYear(year);
    setDate(newDate);
  };

  const handleDateChangeFromYear = (newDate: Date) => {
    setDate(newDate);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <div
        className={`${
          isExpanded ? 'w-72' : 'w-0 overflow-hidden'
        } bg-white border-r border-gray-400 flex-shrink-0 transition-[width] duration-400 z-20 `}
      >
        <ToggleExpand
          containerMarginTop=''
          title={dateUtils.toUser(date, 'monthYear')}
          isShowPoints={false}
        >
          <CalendarMonth
            value={date}
            showLabel={false}
            onChange={setDate}
            event={events}
            onSelectDayEvents={setSelectDayEvents}
          />
        </ToggleExpand>
        <ToggleExpand
          containerMarginTop=''
          contentSpacing='space-y-2'
          title='Mis reservaciones'
          isShowPoints={false}
        >
          <p className='pb-1 font-medium text-gray-600 capitalize border-b-[0.090rem]'>
            {dateUtils.toUser(date, 'shortDayDate')}
          </p>
          <InfoAppointment events={selectDateEvents || []} />
        </ToggleExpand>
      </div>

      <div className='flex-1 flex flex-col min-w-0 overflow-hidden'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full px-2 sm:px-4 py-2 border-b border-gray-200 flex-shrink-0 gap-2 sm:gap-0 bg-white'>
          {/* Toggle Button */}
          <div onClick={handleToggleExpand} className='flex-shrink-0 hidden sm:block'>
            <span className='flex items-center space-x-2'>
              {isExpanded ? (
                <button className='rounded-full'>
                  <IconSidebarLeftCollapse className='w-5 h-5' />
                </button>
              ) : (
                <button className='rounded-full'>
                  <IconSidebarLeftExpand className='w-5 h-5' />
                </button>
              )}
            </span>
          </div>

          <div className='flex justify-center min-w-0 w-12'>
            {view === CalendarView.month ? (
              <Toolbar date={date} setDate={setDate} />
            ) : view === CalendarView.year ? (
              <ToolbarYear year={date.getFullYear()} setYear={handleYearChange} />
            ) : null}
          </div>

          <div className='flex items-center justify-between sm:justify-end space-x-2 flex-shrink-0 w-full sm:w-auto'>
            <div className='block sm:hidden' onClick={handleToggleExpand}>
              <button className='rounded-full'>
                {isExpanded ? (
                  <IconSidebarLeftCollapse className='w-5 h-5' />
                ) : (
                  <IconSidebarLeftExpand className='w-5 h-5' />
                )}
              </button>
            </div>

            <div className='flex items-center xl:space-x-[11rem] lg:space-x-[9rem] md:space-x-[6rem] sm:space-x-[3rem]'>
              <ViewButtonGroup
                view={view}
                views={views || Object.values(CalendarView)}
                onView={handleOnChangeView}
              />
            </div>
          </div>
        </div>

        <div className='flex-1 overflow-hidden bg-[#fdfdfd]'>
          <div className='w-full max-w-full'>
            {view === CalendarView.month ? (
              <BigCalendar
                border='border border-neutral-300'
                event={events || []}
                value={date}
                onChange={setDate}
                onSelectDayAppointments={setSelectDayEvents}
              />
            ) : view === CalendarView.year ? (
              <div className='w-full h-full'>
                <Year initialYear={date.getFullYear()} onChange={handleDateChangeFromYear} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

interface viewProps {
  views: string[];
  view: View;
  onView: (view: View) => void;
}

const messages = {
  month: 'Mes',
  day: 'Día',
  year: 'Año',
};

export const ViewButtonGroup: React.FC<viewProps> = (props) => {
  return (
    <div className='w-auto'>
      {props.views.map((view) => (
        <button
          key={view}
          onClick={() => props.onView(view as View)}
          className='text-xs sm:text-sm px-2 sm:px-3 text-black'
        >
          {messages[view as keyof typeof messages]}
        </button>
      ))}
    </div>
  );
};
