import { Link } from "react-router-dom"

function Header() {
    return(
        <div className="header">
            <header>
                <div>
                    <h1><Link to="/">7776 Robotics</Link></h1>
                </div>
                <div>
                    <nav>
                        <Link to="/robot">Our Robot</Link>|
                        <Link to="/team">Our Team</Link>|
                        <Link to="/impact">Our Impact</Link>|
                        <Link to="/mission">Our FIRST Mission</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header