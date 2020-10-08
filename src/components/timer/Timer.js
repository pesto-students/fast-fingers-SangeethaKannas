import React from 'react'
import './timer.css'
import styled from 'styled-components'

const Circle = styled.circle`
    cx: 50%;
    cy: 50%;
    transition: stroke-dashoffset 1s linear;
    stroke-width: 0.8rem;
    fill: transparent;
    stroke: ${props => props.base ? '#3C4749' :'var(--action-color)'};
`
const Timer = ({ timerValue, totalTime }) => {

    const radius = 51;
    const circumference = radius * 2 * Math.PI;

    return (
        <div className="timer">
            <svg className="timer-svg" viewport="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                <Circle r={radius} base strokeDashoffset="0"
                    strokeDasharray={circumference + ' ' + circumference}
                />
                <Circle r={radius}
                    strokeDasharray={circumference + ' ' + circumference}
                    strokeDashoffset={circumference - ((totalTime - (timerValue * 1000)) / totalTime) * circumference}
                />
                <text x="50%" y="50%" className="timer-text">{timerValue}</text>
            </svg>
        </div>
    )
}

export default Timer;