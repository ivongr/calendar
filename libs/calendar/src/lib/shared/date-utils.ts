import { format as formatFns, formatISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const dateUtils = {
  toUser: (
    date: string | Date | number,
    format:
      | 'date'
      | 'weekdayShort'
      | 'weekdayMonthShort'
      | 'weekdayFull'
      | 'shortDayDate'
      | 'monthYear'
      | 'fullDate'
      | 'fullDateShort'
      | 'weekdayDay'
      | 'time'
      | 'dateTime'
      | 'weekday'
      | 'month'
      | 'yearMonth'
      | 'year'
      | 'isoBasic'
      | 'iso'
  ): string => {
    const locale = es;
    const dateObject = new Date(date);

    switch (format) {
      case 'date':
        return formatFns(dateObject, 'dd/MM/yyyy', { locale });
      case 'weekdayShort':
        return formatFns(dateObject, 'EE dd', { locale });
      case 'weekdayMonthShort':
        return formatFns(dateObject, 'EEEE dd/MM', { locale });
      case 'weekdayFull':
        return formatFns(dateObject, "EEEE, dd 'de' MMMM", { locale });
      case 'shortDayDate':
        return formatFns(dateObject, "EE, dd 'de' MMM", { locale });
      case 'monthYear':
        return formatFns(dateObject, 'MMMM yyyy', { locale });
      case 'fullDate':
        return formatFns(dateObject, 'EEEE d  MMMM  yyyy', { locale: es });
      case 'fullDateShort':
        return formatFns(dateObject, " dd 'de' MMMM 'de' yyyy", { locale: es });
      case 'weekdayDay':
        return formatFns(dateObject, 'EE d', { locale: es });
      case 'time':
        return formatFns(dateObject, 'HH:mm', { locale });
      case 'dateTime':
        return formatFns(dateObject, 'dd/MM/yyyy HH:mm', { locale });
      case 'weekday':
        return formatFns(dateObject, 'EEEE', { locale });
      case 'month':
        return formatFns(dateObject, 'MMMM', { locale });
      case 'yearMonth':
        return formatFns(dateObject, 'MMMM yyyy', { locale });
      case 'year':
        return formatFns(dateObject, 'yyyy', { locale });
      case 'isoBasic':
        return formatISO(dateObject, { format: 'basic' });
      case 'iso':
        return formatISO(dateObject);
      default:
        throw new Error('No cumple con el formato solicitado');
    }
  },
};
