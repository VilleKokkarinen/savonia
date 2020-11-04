import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { errorMessages } from '../../../constants/messages';
import Loading from '../UI/Loading';
import Error from '../UI/Error';

const CustomerView = ({
  error,
  loading,
  customers,
  customerId,
}) => {

  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this customer from all customers
  let customer = null;
  if (customerId && customers) {
    customer = customers.find(item => item.id == customerId);
    }
  // customer not found
  if (!customer) return <Error content={errorMessages.customer404} />;
  
  return (
    <div>
      <Helmet>
        <title>{customer.name}</title>
      </Helmet>

      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-primary" to="/customers">
            <i className="icon-arrow-left" />
            {' Back'}
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h1>
            {customer.name.length >= 100 ? `${customer.name.substring(0, 100)} ...` : customer.name}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="customer-view-card">
          <Card style={{ backgroundColor: '#6A6E74' }}>
            <CardHeader> About this customer </CardHeader>
            <CardBody style={{ backgroundColor: '#606060' }}>
                <pre style={{color: "gold"}}>
                  {JSON.stringify(customer, null, 4)}
                </pre>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
        <Link className="btn btn-primary"
           to={`/updatecustomer/${customerId}`}>           
            {'Edit '}
            <i className="icon-arrow-right" />
          </Link>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </div>
  );
};

CustomerView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  customerId: PropTypes.string.isRequired,
};

CustomerView.defaultProps = {
  error: null,
};

export default CustomerView;
