import React from "react";
import dateFns from "date-fns";
import { Header } from "./header";
import { Month} from "./Month";
import { Category } from "./Category";

class Calendar extends React.Component {
    state = {
        currentDate: new Date(),
        currentDateBackup: new Date(),
        selectedDate: new Date(),
        categoryDate: []
    };

    componentDidMount() {
        document.getElementById("overlay").addEventListener("click", () => {
            document.getElementById("overlay").style.setProperty('display', 'none');
            document.getElementById("category").style.setProperty('display', 'none');
        });
    }

    onDateClick = day => {
        document.getElementById("overlay").style.setProperty('display', 'block');
        document.getElementById("category").style.setProperty('display', 'block');
        this.setState({
            selectedDate: day
        });
    };

    onCategoryClick = category => {
        const accurateFormat = "D-M-YYYY";
        let settledCategoryDate = this.state.categoryDate.findIndex(date => {
            if (date) {
                return dateFns.format(date.day, accurateFormat) === dateFns.format(this.state.selectedDate, accurateFormat);
            }
        });

        let updatedCategoryDate = [...this.state.categoryDate],
          updatedCategoryDateItem = {...updatedCategoryDate[settledCategoryDate]};

        if (settledCategoryDate >= 0) {
            updatedCategoryDateItem.category = category;
            updatedCategoryDate[settledCategoryDate] = updatedCategoryDateItem;
            this.setState({
                categoryDate: updatedCategoryDate
            });
        } else {
            this.setState(prev => ({
                categoryDate: [...prev.categoryDate, {day: prev.selectedDate, category: category}]
            }));
        }
        document.getElementById("overlay").style.setProperty('display', 'none');
        document.getElementById("category").style.setProperty('display', 'none');
    };

    onBackToCurrentYearClick = () => {
        this.setState(prev => ({
            currentDate: prev.currentDateBackup
        }));
    };

    nextYear = () => {
        this.setState({
            currentDate: dateFns.addYears(this.state.currentDate, 1)
        });
    };

    prevYear = () => {
        this.setState({
            currentDate: dateFns.subYears(this.state.currentDate, 1)
        });
    };

    render() {
        return (
            <div className="calendar">
                <Category onCategoryClick={this.onCategoryClick}/>
                <Header
                    currentDate={this.state.currentDate}
                    prevYear={this.prevYear}
                    nextYear={this.nextYear} />
                <div className="calendar-info">
                    <div className="category-item">
                        <span className="category-color category-holiday-color"></span>
                        <span className="category-content">Holiday</span>
                    </div>
                    <div className="category-item">
                        <span className="category-color category-birthday-color"></span>
                        <span className="category-content">Birthday</span>
                    </div>
                    <div className="category-item">
                        <span className="category-color category-busy-color"></span>
                        <span className="category-content">Busy</span>
                    </div>
                    <div className="category-item">
                        <span className="category-color category-anniversary-color"></span>
                        <span className="category-content">Anniversary</span>
                    </div>
                    <button className="btn" onClick={this.onBackToCurrentYearClick}>Current</button>
                </div>
                <Month
                  currentDate={this.state.currentDate}
                  categoryDate={this.state.categoryDate}
                  selectedDate={this.state.selectedDate}
                  onDateClick={this.onDateClick}/>
          </div>
        );
    }
}

export default Calendar;