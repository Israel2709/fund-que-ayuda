import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

class CustomNavbar extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">Nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">Programas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">Tienda Solidaria</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">Contacto</Link>
                                </li>
                            </ul>





                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default CustomNavbar