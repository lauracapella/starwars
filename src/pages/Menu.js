import {Link} from "react-router-dom"
import { Navbar,Nav,NavDropdown,Button,Container } from 'react-bootstrap'

export default function Menu(){
    return(
        <>
          
 <Navbar bg="dark" variant="dark" bg="dark" expand="lg" className="menu_nav">
  <Container>
    <Navbar.Brand href="./">Star Wars</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto ">
        <Nav.Link href="./" >Wellcome</Nav.Link>
        <Nav.Link href="../Spaceshiplist">Spaceshiplist</Nav.Link>
      </Nav>
      <Nav className="md-auto ">
      <Nav.Link href="../Login">Login</Nav.Link>
      <Nav.Link href="../Registration">SignUp</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    )
}