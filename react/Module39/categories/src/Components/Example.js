import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
       <div className="container-fluid">
       <NavbarBrand href="/">Amazon</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/zahid-bracu">Developer's GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">UI Framework's GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink style={{color:"black"}} href="https://www.facebook.com/zahidur">facebook</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink style={{color:"black"}} href="mailto:zahid.mym@gmail.com">Email</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Cart</NavbarText>
        </Collapse>
       </div>
      </Navbar>
    </div>
  );
}

export default Example;