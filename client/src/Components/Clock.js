import React, { useState, useEffect } from "react";
import "../Styles/Clock.css"

function get_date(is_system_clock) {
    let date;
    if (is_system_clock) {
        let currentTime = new Date().getTime();
        let time_diff = process.env.REACT_APP_CLOCK_DIFF_TIME
        date = new Date(currentTime + time_diff * 60 * 60 * 1000);
    } else {
        date = new Date().getTime();
    }
    return date
}

export default function Clock({ txt, is_system_clock = false }) {

    const date = get_date(is_system_clock)
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = get_date(is_system_clock)
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="msg">{txt}</div>
            <br></br>
            <div className="clock">
                <div>

                    {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
                </div>
            </div>
        </div>

    )
}

