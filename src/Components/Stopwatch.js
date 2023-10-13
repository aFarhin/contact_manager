import React, { useEffect, useState } from 'react';
import '../App.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'start') {
      setRunning(true);
      setActiveButton('start');
    } else if (buttonName === 'pause') {
      setRunning(false);
      setActiveButton('pause');
    } else if (buttonName === 'restart') {
      setTime(0);
      setRunning(true);
      setActiveButton('restart');
    }
  };

  const formatTime=(time)=>{
    const hh = Math.floor(time/3600);
    const mm = Math.floor((time%3600)/60);
    const ss = time%60
    return `${String(hh).padStart(2,'0')} : ${String(mm).padStart(2,'0')}: ${String(ss).padStart(2,'0')}`
  }

  return (
    <div>
      <h2>Time: {formatTime(time)}</h2>
      <button
        onClick={() => handleButtonClick('start')}
        className={activeButton === 'start' ? 'active' : 'disabled'}
        disabled={activeButton === 'start'}
      >
        Start
      </button>
      <button
        onClick={() => handleButtonClick('pause')}
        className={activeButton === 'pause' ? 'active' : 'disabled'}
        disabled={activeButton === 'pause'}
      >
        Pause
      </button>
      <button
        onClick={() => handleButtonClick('restart')}
        className={activeButton === 'restart' ? 'active' : 'disabled'}
        disabled={activeButton === 'restart'}
      >
        Restart
      </button>
    </div>
  );
}

export default Stopwatch;
