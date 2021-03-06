import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCustomer, getCustomerData, deleteCustomer } from '../actions/customersMySQL';

class UpdateCustomer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    customerMySQL: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    onFormSubmit: PropTypes.func.isRequired,
    onFormSubmitDEL: PropTypes.func.isRequired,
    fetchCustomer: PropTypes.func.isRequired,
  };

  
  static defaultProps = {
    match: null,
  }


  state = {
    error: null,
    success: null,
    loading: false,
  }
  
  componentDidMount = () => {
      this.fetchData(this.props.match.params.id)
  }

  /**
    * Fetch Data from API, saving to Redux
    */
   fetchData = (uid) => {
      const { fetchCustomer } = this.props;
      this.setState({ loading: true });
      return fetchCustomer(uid)
        .then(() => this.setState({
          loading: false,
          error: null,
        })).catch(err => this.setState({
          loading: false,
          error: err,
        }));   
   }

  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;

    data.AVAIN = this.props.match.params.id
    this.setState({ loading: true });

    return onFormSubmit(data)
      .then(() => this.setState({
        loading: false,
        success: 'Success - Updated',
        error: null,
      })).catch(err => this.setState({
        loading: false,
        success: null,
        error: err,
      }));
  }

  onFormSubmitDEL = (data) => {
    const { onFormSubmitDEL } = this.props;
    data.AVAIN = this.props.match.params.id
    
    this.setState({ loading: true });

    return onFormSubmitDEL(data)
      .then(() => this.setState({
        loading: false,
        success: 'Success - Deleted',
        error: null,
      })).catch(err => this.setState({
        loading: false,
        success: null,
        error: err,
      }));
  }

  render = () => {
    const { error, loading, success } = this.state;
    const { Layout, customerMySQL, match } = this.props;

    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        error={error}
        customerMySQL={customerMySQL.customerMySQL}
        loading={loading}
        success={success}
        onFormSubmit={this.onFormSubmit}
        onFormSubmitDEL={this.onFormSubmitDEL}
        reFetch={() => this.fetchCustomerData(this.props.match.params.id)}
      />
    );
  }
}

const mapStateToProps = state => ({
  customerMySQL: state.customerMySQL || {},
});

const mapDispatchToProps = {
  onFormSubmit: updateCustomer,
  onFormSubmitDEL: deleteCustomer,
  fetchCustomer: getCustomerData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCustomer);
