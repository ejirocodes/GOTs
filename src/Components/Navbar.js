import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import logo from '../Assets/elements/Logo_HBO@2x.png';
import './Navbar.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';

export class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar
          tag="div"
          id="Mobile-nav"
          className="Nav-main"
          color="default-c
          olor"
          fixed="top"
          dark
          expand="md"
        >
          <MDBNavbarBrand>
            <NavLink className="Nav-logo" exact to="/">
              <img src={logo} alt="logo" title="HBO" />
            </NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="Navlink-container">
              <MDBNavItem>
                <MDBNavLink activeClassName="Nav-active" to="/seasons">
                  Seasons
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="Nav-active" to="/characters">
                  Characters
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="Nav-active" to="/houses">
                  Houses
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="Nav-active" to="/lore">
                  Lore
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <nav className="Nav-main" id="Desktop-nav">
          <NavLink className="Nav-logo" exact to="/">
            <img src={logo} alt="logo" title="HBO" />
          </NavLink>
          <ul className="Navlink-container">
            <li>
              <NavLink activeClassName="Nav-active" exact to="/seasons">
                Seasons
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Nav-active" exact to="/characters">
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Nav-active" exact to="/houses">
                Houses
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Nav-active" exact to="/lore">
                Lore
              </NavLink>
            </li>
            <li>
              <NavLink
                className="last-nav-item"
                activeClassName="Nav-active"
                exact
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
