import React from 'react'

import "../style.css"
function Header(){ 
    
    const date = new Date();
    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear()
    
    return(
    
    <header className="head">
       <div className="title">
          My To-Do
       </div>
       <p className="date"> Date: {`${month}/ ${day} /${year}`}</p>
    </header>
    
)
}

export default Header