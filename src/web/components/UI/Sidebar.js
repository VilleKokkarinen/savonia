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
      <Link className={`nav-link ${window.location.pathname.startsWith('/post') && 'active'}`} to="/posts">
        <i className="icon-notebook" />
        {' '}
        <span>Posts</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/chats') && 'active'}`} to="/chats">
        <i className="icon-notebook" />
        {' '}
        <span>Priv. Chats</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/member') && 'active'}`} to="/members">
        <i className="icon-notebook" />
        {' '}
        <span>Members</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/create-post') && 'active'}`} to="/create-post">
        <i className="icon-notebook" />
        {' '}
        <span className={`text ${window.location.pathname.startsWith('/create-post') && 'active'}`} >New Post</span>
      </Link>
    </NavItem>
  </div>
);

const Sidebar = () => (
  <Col sm="2" md="2" className="d-none d-sm-block sidebar">
    <Nav vertical>
      {SidebarNavItems()}
    </Nav>
  </Col>
);

export { Sidebar, SidebarNavItems };
