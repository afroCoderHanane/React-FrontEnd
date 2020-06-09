import React from 'react'
import TodoItem from './subcomponent/TodoItem'
//import "../style.css"
function MainContent(){ 
    
    return (
    <main className="todo-list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </main>
    )
    }
export default MainContent