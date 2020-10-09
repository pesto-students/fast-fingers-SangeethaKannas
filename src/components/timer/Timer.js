import React from 'react'
import { Svg, Circle, Text } from "./TimerStyles";
const Timer = ({ timerValue, totalTime }) => {
    const radius = 51;
    const circumference = radius * 2 * Math.PI;

    return (
        <Svg className="timer-svg" viewport="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
            <Circle r={radius} base strokeDashoffset="0"
                strokeDasharray={circumference + ' ' + circumference}
            />
            <Circle r={radius}
                strokeDasharray={circumference + ' ' + circumference}
                strokeDashoffset={circumference - ((totalTime - (timerValue * 1000)) / totalTime) * circumference}
            />
            <Text x="50%" y="50%" className="timer-text">{timerValue}</Text>
        </Svg>
    )
}

export default Timer;