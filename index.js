// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page
import React from "react"
import ReactDom from "react-dom"

ReactDom.render(<div>
  <h2> My unordered list</h2>
  <ul>
     <li>Pytorch bootcamp</li>
     <li>React Bootcamp</li>
     <li>Full Stack Hack</li>
  </ul>
</div>, document.getElementById("root"))