import React from 'react'
import { Svg, Circle, Text, FontAwesomeSVG } from "./TimerStyles";

const Timer = ({ timerValue, totalTime, handlePause, paused }) => {
    const isMobile = window.innerWidth < 500;
    const radius = isMobile ? 60: 70;
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
            <Text x="50%" y={isMobile? '45%': '45%' } className="timer-text">{timerValue}</Text>
            <g>
                <FontAwesomeSVG x="50%" y={isMobile? '75%': '65%'} onClick={handlePause} >
                    { paused ? '\uf04b' : '\uf04c' }
                </FontAwesomeSVG>
            </g>
        </Svg>
    )
}

export default Timer;