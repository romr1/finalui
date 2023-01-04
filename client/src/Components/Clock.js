import React, { useState, useEffect } from "react";
import "../Styles/Clock.css"

const date = new Date();

export default function Clock({ txt, is_system_clock = false }) {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    if (is_system_clock) {
        dateTime.hours = dateTime.hours + 2
    }
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

