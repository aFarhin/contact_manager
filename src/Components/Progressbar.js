import React, { useState } from 'react'
import '../App.css'


function Progressbar() {

const [value, setValue]= useState(0)
const [success, setSuccess]= useState('Not Started')

const increaseVal=()=>{
    if(value<=90){
        setValue((val)=>{
            return val+10
        })
        setSuccess('Progressing')
    } 
    if(value==100 || value>90){
        setSuccess('Congratulations! You have completed the task')
    }
}

const getBackgroundColor=(value)=>{
    if((value)<=15){
        return 'red'
    }
    if((value)<=30){
        return 'orange'
    }
    if((value)<=45){
        return 'lightblue'
    }
    if((value)<=70){
        return 'blue'
    }
    if((value)<=100){
        return 'green'
    }
    
}
const BackgroundColor = getBackgroundColor(value)
  return (
    <div className='main'>
    <h3>Task Status :  {success}</h3>
    <div className='app'>
    <div className='progress' style={{backgroundColor: BackgroundColor,   width: `${value}%`,}}> 
    {value}%</div>
    </div>
    <button  onClick={increaseVal}>Increase Value</button>
    </div>
  )
}

export default Progressbar