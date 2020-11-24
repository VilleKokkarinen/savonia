import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Alert,
  Input,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class UpdateCustomer extends React.Component {
  static propTypes = {
    customer: PropTypes.shape().isRequired,
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onFormSubmitDEL: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
  }

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      name: props.customer.name || '',
      address: props.customer.address || '',
      postnumber: props.customer.postnumber || '',
      postlocation: props.customer.postlocation || '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitDEL = this.handleSubmitDEL.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit } = this.props;

    onFormSubmit(this.state).catch(() => {});
  }


  handleSubmitDEL = (e) => {
    e.preventDefault();
    const { onFormSubmitDEL } = this.props;

    onFormSubmitDEL(this.state).catch(() => {});
  }
    render() {
    const { loading, success, error } = this.props;
    const {
      name, address, postlocation, postnumber,
    } = this.state

    return (
      <div>
          <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-primary" to={`/customer/${this.props.customer.id}`}>
            <i className="icon-arrow-left" />
            {' Back'}
          </Link>
        </Col>
      </Row>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card className="p-card" style={{maxHeight: 1000}}>
              <CardHeader className="header">Update Customer</CardHeader>
              <CardBody>
                {!!error && <Alert color="danger">{error}</Alert>}
                {!!success && <Alert color="success">{success}</Alert>}

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="name" style={{ margin: 0 }}>
                      {'Name'}
                    </Label>
                    <Input
                      className="text"
                      type="text"
                      name="name"
                      id="name"
                      placeholder={name}
                      value={name}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address" style={{ margin: 0 }}>
                      {'Address'}
                    </Label>
                    <Input
                      className="text"
                      type="text"
                      name="address"
                      id="address"
                      placeholder="tie 5 a"
                      value={address}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="postlocation" style={{ margin: 0 }}>
                      {'Postlocation'}
                    </Label>
                    <Input
                      className="postlocation"
                      type="text"
                      name="postlocation"
                      id="postlocation"
                      placeholder="kuopio"
                      value={postlocation}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="postnumber" style={{ margin: 0 }}>
                      {'Postnumber'}
                    </Label>
                    <Input
                      className="postnumber"
                      type="text"
                      name="postnumber"
                      id="postnumber"
                      placeholder="70500"
                      value={postnumber}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button style={{ marginTop: 20 }} color="primary" disabled={loading}>
                    {loading ? 'Loading' : 'Update Customer'}
                  </Button>
                  <Button style={{ marginTop: 20, marginLeft: 20, color: "red"}} color="primary" disabled={loading} onClick={this.handleSubmitDEL}>
                    {loading ? 'Loading' : 'Delete Customer'}
                  </Button>
                </Form>
              
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpdateCustomer;
