import React from "react";
import DatePicker from "react-datepicker"; //import reat-datepicker module
import "react-datepicker/dist/react-datepicker.css"; //import reat-datepicker module css
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 

/**
   * Customise input component for the datepicker 
   * replace the default date picker component with with a calendar icon
*/
const DatePickerCustomInput = React.forwardRef(
    ({ onClick }, ref) => (<div className="calendar_icon"><FiCalendar onClick={onClick} /></div>)
);

const ref = React.createRef(); // we need to add a Dom ref to the new Component to avoid Dom reffrence Error

const DatePickerCalendar = (props) => {
    return (
        <div className="datepicker" style={style} >
            <DatePicker
                selected={props.date}
                onChange={props.handleDateChange}
                customInput={<DatePickerCustomInput ref={ref} />}
                dateFormat="yyyy/MM/dd HH:mm:ss"
                showTimeSelect
                timeIntervals={15}
            />
        </div>
    );
}

const style = {
    display: "flex",
    marginLeft: "15px",
    fontSize: "1em",
    color: "#32e0c4",
    cursor: "pointer",
}

export default DatePickerCalendar