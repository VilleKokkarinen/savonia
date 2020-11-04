/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SidebarNavItems = () => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" />
        {' '}
        <span>Home</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/customers') && 'active'}`} to="/customers">
        <i className="icon-notebook" />
        {' '}
        <span>customers NoSQL</span>
      </Link>
    </NavItem>   
  </div>
);

const Sidebar = () => (
  <Col sm="2" className="d-none d-sm-block sidebar">
    <Nav vertical>
      {SidebarNavItems()}
    </Nav>
  </Col>
);

export { Sidebar, SidebarNavItems };
