import logo from "./assets/trans-logo.png"
import "./App.css"
import { useRef, useState, useEffect } from 'react'

function App() {
  const [y, setY] = useState(0)
  const [x, setX] = useState(1)
  const [theta, setTheta] = useState(0)
  const startTimeReference = useRef(null)

  useEffect(() => {
    function animate(timestamp) {
      if (startTimeReference.current === null) {
        startTimeReference.current = timestamp;
      }

      const elapsed = timestamp - startTimeReference.current;
      const start = elapsed/1000
      const viewportWidth = document.documentElement.clientWidth;

      setX((viewportWidth/2));
      setTheta(Math.cos(start)*-180)

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [])

  return(
    <main>
      <header>
        <div>
          <h1>7776 Robotics</h1>
        </div>
        <div>
          <nav>
            <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our Robot</a>|
            <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our Team</a>|
            <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our Impact</a>|
            <a href = "https://en.wikipedia.org/wiki/Powdered_sugar">Our FIRST Mission</a>
          </nav>
        </div>
      </header>
      <div className="top" style = {{perspective: "600px"}}>
        <img 
          className="logo"
          src={logo} 
          alt = "TeamLogo" 
          style={{
            transformOrigin: "center",
            transform: `translateX(calc(${x}px - var(--element_width) / 2))`, //rotateY(${theta}deg),
            backfaceVisibility: "visible",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
      <section> 
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      <section>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      <section>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      <section>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae.</p>
        </div>
      </section>
      
      <footer>
        <p>Copyright ©2025</p>
        <p>Website created by The Lord of Dorthonion, King Upon Foen, Master of the Highlands, Enjoyer of Pesto Sandwiches, Presser of Down on D-Pad</p>
      </footer>
    </main>
  )
}

export default App
