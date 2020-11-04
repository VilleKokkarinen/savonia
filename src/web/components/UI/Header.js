import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  Collapse,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Config from '../../../constants/config';

class Header extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    Items: PropTypes.shape().isRequired,
  }

  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = { isOpen: false };
  }

  toggleDropDown = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { Items } = this.props;
    const { isOpen } = this.state;
    return (
      <header style={{ height: 60 }}>
        <Navbar dark expand="sm" className="fixed-top" style={{ minHeight: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/" className="navbar-brand" style={{ color: '#ffd970', height: 40 }}>
            <img
              src="https://i.imgur.com/Dxkqw0C.png"
              alt="header"
              className="header-image"
            />
            {' '}
            {Config.appName}
          </Link>
          <NavbarToggler onClick={this.toggleDropDown} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div className="d-block d-sm-none">
                {Items}
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(Header);
