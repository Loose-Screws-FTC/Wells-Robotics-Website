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
      <div className="top">
        <img className="logo" src={logo} alt="TeamLogo"/>
      </div>
      <Unit
        title="Our Logo"
        text="I'm pretty sure Maya designed it? Its really good."
        image_src={logo}
      />
      <Unit
        title="Our People"
        text="We're pretty cool people"
      />
      <Unit
        title="Our Robot"
        text="Innovative. Ingenious. Powerful. Deceptively So. Our Robot."
      />
      <Unit
        title="Our Impact"
        text="Very closely tied to our sister team. Also we help our feeder middle school team."
      />
    </main>
  )
}