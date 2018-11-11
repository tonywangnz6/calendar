import React from "react";
import dateFns from "date-fns";

export const Header = (props) => {
    const dateFormat = "YYYY";
    return (
      <div className="header row flex-middle">
          <div className="col col-start">
              <div className="icon" onClick={props.prevYear}>
                  chevron_left
              </div>
          </div>
          <div className="col col-center">
              <span className='year-content'>{dateFns.format(props.currentDate, dateFormat)}</span>
          </div>
          <div className="col col-end" onClick={props.nextYear}>
              <div className="icon">chevron_right</div>
          </div>
      </div>
    );
};