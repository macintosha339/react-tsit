import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap'
import logo from './logo192.png';
import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Company from '../Pages/Company';
import Contacts from '../Pages/Contacts';
import PressCenter from '../Pages/PressCenter';
import Services from '../Pages/Services';
import TechSupport from '../Pages/TechSupport';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="primary">
                    <Container fluid>
                        <NavbarBrand href="/">
                            <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="logo"
                            />
                        </NavbarBrand> TSIT
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nr-auto">
                            <Nav.Link href="/">Компания</Nav.Link>
                            <Nav.Link href="/services">Услуги</Nav.Link>
                            <Nav.Link href="/techSupport">Техподдержка</Nav.Link>
                            <Nav.Link href="/pressCenter">Пресс-центр</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Company} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/techSupport" component={TechSupport} />
                        <Route exact path="/pressCenter" component={PressCenter} />
                        <Route exact path="/contacts" component={Contacts} />
                    </Switch>
                </Router>
            </div>
        )
    }
}