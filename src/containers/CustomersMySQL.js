import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCustomers } from '../actions/customersMySQL';

class CustomerListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    customersMySQL: PropTypes.shape().isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchCustomers: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  /**
    * Fetch Data from API, saving to Redux
    */
   fetchData = (data) => {
     const { fetchCustomers } = this.props;
     this.setState({ loading: true });
     return fetchCustomers(data)
       .then(() => this.setState({
         loading: false,
         error: null,
       })).catch(err => this.setState({
         loading: false,
         error: err,
       }));
   }

  render = () => {
    const { Layout, customersMySQL, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;
    return (
      <Layout
        customerId={id}
        error={error}
        loading={loading}
        customersMySQL={customersMySQL.customersMySQL}
        reFetch={() => this.fetchCustomers()}
      />
    );
  }
}

const mapStateToProps = state => ({
  customersMySQL: state.customersMySQL || {},
});

const mapDispatchToProps = {
  fetchCustomers: getCustomers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListing);
