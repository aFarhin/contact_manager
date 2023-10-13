import React from 'react'
import Progressbar from './components/Progressbar'
import AutomaticProgress from './components/AutomaticProgress'
function App() {
  return (
    <div >
    <h1 style={{textAlign: 'center'}}>ProgressBar</h1>
    <div className='apps'>
      <Progressbar />
      <AutomaticProgress/>
      </div>
    </div>
  )
}

export default App