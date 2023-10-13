import React from 'react'
import Progressbar from './components/Progressbar'
import AutomaticProgress from './components/AutomaticProgress'
import Stopwatch from './components/Stopwatch'
function App() {
  return (
    <div >
    <h1 style={{textAlign: 'center'}}>ProgressBar</h1>
    <div className='apps'>
      <Progressbar />
      <div className='autoStop'>
      <AutomaticProgress/>
      <span> <Stopwatch/></span>
      </div>
      
     
    
      </div>
    </div>
  )
}

export default App