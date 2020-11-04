import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  static propTypes = {
    Items: PropTypes.shape().isRequired,
    Layout: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
  }

  render = () => {
    const { Layout, Items } = this.props;

    return <Layout Items={Items} />;
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
