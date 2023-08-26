import { Container, Nav, Navbar } from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>MERN App</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/login'>
                            <FaSignInAlt /> Login
                        </Nav.Link>
                        <Nav.Link href='/login'>
                            <FaSignOutAlt /> Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header