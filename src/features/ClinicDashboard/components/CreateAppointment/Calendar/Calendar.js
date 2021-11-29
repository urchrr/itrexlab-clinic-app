import Calendar from 'react-calendar';
import React from 'react';
import { Blocker } from 'features/ClinicDashboard/components/CreateAppointment/styles';
import { ReactComponent as PrevIcon } from '../../../images/angle-left-b.svg';
import { ReactComponent as NextIcon } from '../../../images/angle-right-b.svg';

const TimeCalendar = function ({ blocked, ...props }) {
  return (
    <Blocker blocked={blocked}>
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
    </Blocker>
  );
};

export default TimeCalendar;
