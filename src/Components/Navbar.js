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
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
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
               <MDBNavbar color="default-color" dark expand="md">
                 <MDBNavbarBrand>
                   <strong className="white-text">Navbar</strong>
                 </MDBNavbarBrand>
                 <MDBNavbarToggler onClick={this.toggleCollapse} />
                 <MDBCollapse
                   id="navbarCollapse3"
                   isOpen={this.state.isOpen}
                   navbar
                 >
                   <MDBNavbarNav left>
                     <MDBNavItem active>
                       <MDBNavLink to="#!">Home</MDBNavLink>
                     </MDBNavItem>
                     <MDBNavItem>
                       <MDBNavLink to="#!">Features</MDBNavLink>
                     </MDBNavItem>
                     <MDBNavItem>
                       <MDBNavLink to="#!">Pricing</MDBNavLink>
                     </MDBNavItem>
                     <MDBNavItem>
                       <MDBDropdown>
                         <MDBDropdownToggle nav caret>
                           <div className="d-none d-md-inline">Dropdown</div>
                         </MDBDropdownToggle>
                         <MDBDropdownMenu className="dropdown-default">
                           <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                           <MDBDropdownItem href="#!">
                             Another Action
                           </MDBDropdownItem>
                           <MDBDropdownItem href="#!">
                             Something else here
                           </MDBDropdownItem>
                           <MDBDropdownItem href="#!">
                             Something else here
                           </MDBDropdownItem>
                         </MDBDropdownMenu>
                       </MDBDropdown>
                     </MDBNavItem>
                   </MDBNavbarNav>
                   <MDBNavbarNav right>
                     <MDBNavItem>
                       <MDBNavLink className="waves-effect waves-light" to="#!">
                         <MDBIcon fab icon="twitter" />
                       </MDBNavLink>
                     </MDBNavItem>
                     <MDBNavItem>
                       <MDBNavLink className="waves-effect waves-light" to="#!">
                         <MDBIcon fab icon="google-plus-g" />
                       </MDBNavLink>
                     </MDBNavItem>
                     <MDBNavItem>
                       <MDBDropdown>
                         <MDBDropdownToggle nav caret>
                           <MDBIcon icon="user" />
                         </MDBDropdownToggle>
                         <MDBDropdownMenu className="dropdown-default">
                           <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                           <MDBDropdownItem href="#!">
                             Another Action
                           </MDBDropdownItem>
                           <MDBDropdownItem href="#!">
                             Something else here
                           </MDBDropdownItem>
                           <MDBDropdownItem href="#!">
                             Something else here
                           </MDBDropdownItem>
                         </MDBDropdownMenu>
                       </MDBDropdown>
                     </MDBNavItem>
                   </MDBNavbarNav>
                 </MDBCollapse>
               </MDBNavbar>
               <nav className="Nav-main">
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
                     <NavLink
                       activeClassName="Nav-active"
                       exact
                       to="/characters"
                     >
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
