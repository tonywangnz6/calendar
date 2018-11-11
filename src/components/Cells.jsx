import React from "react";
import dateFns from "date-fns";

export const Cells = (props) => {
    const monthStart = dateFns.startOfMonth(props.month);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const accurateFormat = "D-M-YYYY";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);
            const cloneDay = day;
            let categoryDay = props.categoryDate.filter(date => {
                return (dateFns.format(date.day, accurateFormat) === dateFns.format(day, accurateFormat))
            });

            days.push(
              <div
                className={`col cell ${
                  !dateFns.isSameMonth(day, monthStart)
                    ? "disabled"
                    : dateFns.isSameDay(day, props.currentDate) ? "selected" : ""
                  } ${
                  dateFns.isSameDay(day, props.selectedDate) ? "checked" : ""
                  } ${
                  dateFns.isWeekend(day)
                    ? "weekend"
                    : ''
                  } ${
                  categoryDay[0]
                    ? categoryDay[0].category.toLowerCase()
                    : ''
                  }`}
                key={day}
                onClick={() => props.onDateClick(dateFns.parse(cloneDay))}
              >
                  <span className="number">{formattedDate}</span>
              </div>
            );
            day = dateFns.addDays(day, 1);
        }
        rows.push(
          <div className="row" key={day}>
              {days}
          </div>
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};