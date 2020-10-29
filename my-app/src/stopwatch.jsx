import React, { useState, useRef } from "react";

const Stopwatch = () => {
const [timer, setTimer] = useState(0);
const [isActive, setIsActive] = useState(false);
const countRef = useRef(null);

const handleStart = () => {
if(!isActive) {
setIsActive(true);
countRef.current = setInterval(() => {
setTimer((timer) => timer + 1);
}, 1000);
}
};

const handlePause = () => {
clearInterval(countRef.current);
};

const handleResume = () => {
countRef.current = setInterval(() => {
setTimer((timer) => timer + 1);
}, 1000);
};

const handleReset = () => {
clearInterval(countRef.current);
setIsActive(false);
setTimer(0);
};

const formatTime = () => {
const getSeconds = `0${timer % 60}`.slice(-2);
const minutes = `${Math.floor(timer / 60)}`;
const getMinutes = `0${minutes % 60}`.slice(-2);
const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

return (
<div>
<p>{formatTime()}</p>
<button onClick={handleStart}>Start</button>
<button onClick={handlePause}>Pause</button>
<button onClick={handleResume}>Resume</button>
<button onClick={handleReset}>Reset</button>
</div>
);
};

export default Stopwatch;