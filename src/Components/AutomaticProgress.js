import React, { useEffect, useState } from 'react';

function AutomaticProgress() {
  const [val, setVal] = useState(0);

  const getBackgroundColor = (value) => {
    if (value <= 15) {
      return 'red';
    }
    if (value <= 30) {
      return 'orange';
    }
    if (value <= 45) {
      return 'lightblue';
    }
    if (value <= 70) {
      return 'blue';
    }
    if (value <= 100) {
      return 'green';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (val < 100) {
        setVal((va) => va + 1);
      } else {
        clearInterval(interval); 
      }
    }, 100);

    return () => {
      clearInterval(interval); 
    };
  }, [val]);

  const backgroundColor = getBackgroundColor(val);

  return (
    <div className="auto">
      <div className="autoprogress" style={{ backgroundColor, height: `${val}%` }}>
        {val}%
      </div>
    </div>
  );
}

export default AutomaticProgress;
