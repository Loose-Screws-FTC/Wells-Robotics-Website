import logo from "./assets/trans-logo.png"
import "./App.css"
import { useRef, useState, useEffect } from 'react'

function App() {
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const [theta, setTheta] = useState(0)
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

      setX(Math.cos(start)*(viewportWidth/3)+(viewportWidth/2));
      setTheta(Math.cos(start))
      // setY(Math.sin(start)*500);

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [])

  return(
    <>
      <title>FTC 7776</title>
      <header>
        <h1>7776 Robotics</h1>
        <nav>
          <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our Robot</a> | 
          <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our Team</a> | 
          <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our Impact</a> | 
          <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our FIRST Mission</a>
      </nav>
      </header>
        <div class = "top">
          <img 
            className="logo"
            src={logo} 
            alt = "TeamLogo" 
            style={{
              transform: `translateX(calc(${x}px - var(--element_width)/2)) rotateY(${theta}deg)`,
            }}
          />
        </div>
        <p>{x}</p>
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
