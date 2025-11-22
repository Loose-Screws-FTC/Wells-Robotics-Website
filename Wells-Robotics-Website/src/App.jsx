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

      setX(Math.cos(start)*50);
      setY(Math.sin(start)*50);

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [])

  return(
    <>
      <title>FTC 7776</title>
      <header>
        7776 Robotics
      </header>
        <div class = "top">
          <img 
            src={logo} 
            alt = "TeamLogo" 
            style={{
            width:"200px",
            height: "auto", 
            // position: "relative",
            // left: `${x+(viewportWidth/2)-100}px`, 
            // top: `${y+(viewportHeight/2)-(150)}px`,
            // transform: `rotateY(${((x-200)/200)*360}deg)`,
            // transformStyle: "preserve-3d",
          }}/>
        </div>
      <section>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      <section>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      <section>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      <section>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
 
    </>
  )
}

export default App
