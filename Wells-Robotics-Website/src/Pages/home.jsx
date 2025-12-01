import logo from "../assets/trans-logo.png"
import { useRef, useState, useEffect } from "react"
import Unit from "../Components/unit"

export default function Home() {
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
      <Unit
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae."
      />
      <Unit
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae."
      />
      <Unit
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae."
      />
      <Unit
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quia! Unde, alias minima! Perferendis, eaque. Esse consequuntur, adipisci facere rem dolorum voluptatum. Hic molestias, tenetur fugit rem error porro repudiandae."
      />
    </main>
  )
}