import logo from "./assets/trans-logo.png"
import "./App.css"
import { useRef, useState, useEffect } from 'react'

function App() {
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const startTimeReference = useRef(null)
  useEffect(() => {
    function animate(timestamp) {
      if (startTimeReference.current === null) {
        startTimeReference.current = timestamp;
      }

      const elapsed = timestamp - startTimeReference.current;
      const start = elapsed/1000

      setX(Math.cos(start)*200 + 200);
      setY(Math.sin(start)*200 + 200);

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [])

  return(
    <>
      <div>
        <h1>Team 7776</h1>
      </div>
      <div>
        <img 
        src={logo} 
        alt = "TeamLogo" 
        style={{
          width:"200px",
          height: "auto", 
          position: "relative",
          left: String(x) + "px", 
          top: String(y) + "px",
          transform: `rotateY(${((x-200)/200)*360}deg)`,
          transformStyle: "preserve-3d"
          }}/>
      </div>
      <div>
        <p>Lorem ipsum or something</p>
      </div>
    </>
  )
}

export default App
