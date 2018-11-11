import React from "react";
import dateFns from "date-fns";
import { Days } from "./Days";
import { Cells } from "./Cells";

export const Month = (props) => {
    const monthFormat = "MMMM";
    const yearFormat = "YYYY";
    const currentYear = dateFns.format(props.currentDate, yearFormat);
    const months = [];

    for (let i = 0; i < 12; i++) {
        let month = i + 1;
        months.push(
          <div className="month-container" key={i}>
              <div className="month row">
                  <span>{dateFns.format(currentYear + ',' + (i + 1), monthFormat)}</span>
              </div>
              <Days currentDate={props.currentDate}/>
              <Cells
                  month={currentYear + ',' + month}
                  categoryDate={props.categoryDate}
                  onDateClick={props.onDateClick}
                  selectedDate={props.selectedDate}
                  currentDate={props.currentDate}/>
              {/*{this.renderCells(currentYear + ',' + month)}*/}
          </div>
        );
    }

    return <div className="year">{months}</div>;
};