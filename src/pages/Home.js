import cardLogo from "../assets/card-logo.png"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Home = () => {
  return(
    <main className="display">
      <img
        alt="logo"
        src={cardLogo}
        style={{
          height: 500,
          width: 600
        }} 
      />
      <div className="centered">
        <Nav>
          <NavItem>
            <NavLink to="/all-cards" className="link">
              See All The Cards
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink to="/all-cards" className="link">
              Terms
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink to="/all-cards" className="link">
              Multiple Choice
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </main>
  )
}

export default Home 