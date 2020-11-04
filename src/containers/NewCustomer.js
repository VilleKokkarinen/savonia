import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {createCustomer } from '../actions/customers';

class UpdateCustomer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    customer: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    onFormSubmit: PropTypes.func.isRequired,
  };

  
  static defaultProps = {
    match: null,
  }


  state = {
    error: null,
    success: null,
    loading: false,
  }
  
  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;

    this.setState({ loading: true });

    return onFormSubmit(data)
      .then(() => this.setState({
        loading: false,
        success: 'Success - added new customer',
        error: null,
      })).catch(err => this.setState({
        loading: false,
        success: null,
        error: err,
      }));
  }

  render = () => {
    const { error, loading, success } = this.state;
    const { Layout, match } = this.props;

    return (
      <Layout
        error={error}
        loading={loading}
        success={success}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer || {},
});

const mapDispatchToProps = {
  onFormSubmit: createCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCustomer);
