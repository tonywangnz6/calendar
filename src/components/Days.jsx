import React from "react";
import dateFns from "date-fns";

export const Days = (props) => {
    const dateFormat = "dd";
    const days = [];

    let startDate = dateFns.startOfWeek(props.currentDate);

    for (let i = 0; i < 7; i++) {
        days.push(
          <div className="col col-center" key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
          </div>
        );
    }

    return <div className="days row">{days}</div>;
};