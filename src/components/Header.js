import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import cardLogo from "../assets/card-logo.png"

const Header = () => {
  return(
    <header>
      <Navbar
        className="my-2"
        color="dark"
      >
        <NavbarBrand id="logo" href="/">
          <img
            alt="logo"
            src={cardLogo}
            style={{
              height: 40,
              width: 40
            }} 
          />
          {" "}
          Flashcards
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink to="/all-cards" id="logo">
              Terms
            </NavLink>
            {" "}
            <NavLink to="/all-cards" id="logo">
              Multiple Choice
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header 