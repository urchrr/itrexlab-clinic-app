import Calendar from 'react-calendar';
import React from 'react';
import { ReactComponent as PrevIcon } from '../../../images/angle-left-b.svg';
import { ReactComponent as NextIcon } from '../../../images/angle-right-b.svg';

const TimeCalendar = function ({ ...props }) {
  return (
    <Calendar
      formatMonthYear={(local, date) => date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })}
      formatShortWeekday={(local, date) => date
        .toLocaleDateString('en-US', {
          weekday: 'short',
        })
        .substring(0, 1)}
      prevLabel={<PrevIcon />}
      nextLabel={<NextIcon />}
      {...props}
    />
  );
};

export default TimeCalendar;
