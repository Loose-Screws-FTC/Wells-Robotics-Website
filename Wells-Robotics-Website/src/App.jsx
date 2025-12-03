import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/home"
import Robot from "./Pages/robot"
import Impact from "./Pages/impact"
import Mission from "./Pages/mission"
import Team from "./Pages/team"
import Header from "./Components/header"
import Footer from "./Components/footer"

function App() {
  return(
    <div class="webpage">
      <main>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/robot" element={<Robot/>}/>
            <Route path="/Impact" element={<Impact/>}/>
            <Route path="/Mission" element={<Mission/>}/>
            <Route path="/Team" element={<Team/>}/>
          </Routes>
        </Router>
      </main>
      <Footer/>
    </div>
  )
}



export default App
