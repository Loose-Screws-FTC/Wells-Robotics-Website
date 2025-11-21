import logo from "./assets/trans-logo.png";
import "./App.css";
import { useState } from 'react'

function App() {
  return(
    <>
      <div>
        <h1>Team 7776</h1>
      </div>
      <div>
        <img src={logo} alt = "TeamLogo" style={{width:"200px", height: "auto"}}/>
      </div>
      <div>
        <p>Lorem ipsum etc.</p>
      </div>
    </>
  )
}

export default App
