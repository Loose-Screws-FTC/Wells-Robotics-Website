import logo from "./assets/trans-logo.png"
import "./App.css"
import { useRef, useState, useEffect } from 'react'

function App() {
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const startTimeReference = useRef(null)
  
  let viewportWidth = document.documentElement.clientWidth;
  let viewportHeight = document.documentElement.clientHeight;

  useEffect(() => {
    function animate(timestamp) {
      if (startTimeReference.current === null) {
        startTimeReference.current = timestamp;
      }

      const elapsed = timestamp - startTimeReference.current;
      const start = elapsed/1000

      setX(Math.cos(start)*200);
      setY(Math.sin(start)*200);

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
          left: `${x+(viewportWidth/2)-100}px`, 
          top: `${y+(viewportHeight/2)-(150)}px`,
          transform: `rotateY(${((x-200)/200)*360}deg)`,
          transformStyle: "preserve-3d",
          }}/>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
      </div>
      <p>{x}</p>
    </>
  )
}

export default App
