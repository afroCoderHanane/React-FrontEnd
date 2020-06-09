import React from 'react'

//import "../../style.css"
function TodoItem(){ 
    /*const date = new Date()
    const hours = date.getHours()
    
    const min = date.getMinutes()
    let timeofDay
    let timeStamp;
    if(hours<=12) 
    {
        timeofDay= "Morning"
        timeStamp ="AM"
    }
    else if(hours>12&&hours<17)
    {
        timeofDay="Afternoon"
        timeStamp ="PM"
    }
    else
      { timeofDay="Night"
      timeStamp ="PM"
    }

   */
    return (
    <div className="todo-item">
        <input type="checkbox"/>
        <p>Placeholder text here</p>
    </div>
    )
    }
export default TodoItem