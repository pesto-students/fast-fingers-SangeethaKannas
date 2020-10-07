import React from 'react'

const Timer = ({ timerValue, totalTime }) => {

    const radius = 45;
    const circumference = radius * 2 * Math.PI;

    return (
        <div className="timer">
            <svg className="timer-svg" viewport="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r={radius} className="base-circle"
                    strokeDasharray={circumference + ' ' + circumference}
                />
                <circle cx="50" cy="50" r={radius} className="progress-circle"
                    strokeDasharray={circumference + ' ' + circumference}
                    strokeDashoffset={circumference - ((totalTime - (timerValue * 1000)) / totalTime) * circumference}
                />
                <text x="40" y="50" className="timer-text">{timerValue}</text>
            </svg>
        </div>
    )
}

export default Timer;