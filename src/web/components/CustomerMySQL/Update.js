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
    customerMySQL: PropTypes.shape().isRequired,
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
    this.state = {
      NIMI: props.customerMySQL.NIMI || '',
      OSOITE: props.customerMySQL.OSOITE || '',
      POSTINRO: props.customerMySQL.POSTINRO || '',
      POSTITMP: props.customerMySQL.POSTITMP || '',
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


  refreshState = () => {
    this.setState({
      NIMI: this.props.customerMySQL.NIMI || '',
      OSOITE: this.props.customerMySQL.OSOITE || '',
      POSTINRO: this.props.customerMySQL.POSTINRO || '',
      POSTITMP: this.props.customerMySQL.POSTITMP || '',
    });
  }

  handleSubmitDEL = (e) => {
    e.preventDefault();
    const { onFormSubmitDEL } = this.props;

    onFormSubmitDEL(this.state).catch(() => {});
  }
    render() {
    const { loading, success, error } = this.props;
    const {
      NIMI, OSOITE, POSTITMP, POSTINRO,
    } = this.state

    return (
      <div>
          <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-primary" to={`/customerMySQL/${this.props.customerMySQL.AVAIN}`}>
            <i className="icon-arrow-left" />
            {' Back'}
          </Link>
        </Col>
      </Row>
      <Button onClick={()=>this.refreshState()} >{'piirrä tiedot uusiksi (react ei aina piirrä tätä uudelleen vaikka propsit päivittyy..)'}</Button>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card className="p-card" style={{maxHeight: 1000}}>
              <CardHeader className="header">Update Customer</CardHeader>
              <CardBody>
                {!!error && <Alert color="danger">{error}</Alert>}
                {!!success && <Alert color="success">{success}</Alert>}

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="NIMI" style={{ margin: 0 }}>
                      {'NIMI'}
                    </Label>
                    <Input
                      className="text"
                      type="text"
                      name="NIMI"
                      id="NIMI"
                      placeholder='NIMI'
                      value={NIMI}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="OSOITE" style={{ margin: 0 }}>
                      {'OSOITE'}
                    </Label>
                    <Input
                      className="text"
                      type="text"
                      name="OSOITE"
                      id="OSOITE"
                      placeholder="OSOITE"
                      value={OSOITE}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="POSTITMP" style={{ margin: 0 }}>
                      {'POSTITMP'}
                    </Label>
                    <Input
                      className="POSTITMP"
                      type="text"
                      name="POSTITMP"
                      id="POSTITMP"
                      placeholder="POSTITMP"
                      value={POSTITMP}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="POSTINRO" style={{ margin: 0 }}>
                      {'POSTINRO'}
                    </Label>
                    <Input
                      className="POSTINRO"
                      type="text"
                      name="POSTINRO"
                      id="POSTINRO"
                      placeholder="POSTINRO"
                      value={POSTINRO}
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
