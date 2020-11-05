import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Input,
  Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class CustomerListing extends React.Component{
  static propTypes = {
    customers: PropTypes.any.isRequired
  };
  
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        asty_id: '',
    };
    this.filtered = this.props.customers;

    this.handleChange = this.handleChange.bind(this);
  }

  useConditions = search => a => Object.keys(search).every(k => 
    String(a[k]).toLowerCase().includes(String(search[k]).toLowerCase()) ||
    Array.isArray(search[k]) && search[k].includes(a[k]) ||
    typeof search[k] === 'object' && +search[k].min <= a[k] && a[k] <= +search[k].max ||
    typeof search[k] === 'function' && search[k](a[k])
);

  handleChange = (e) => {
    var promise = new Promise(async (resolve, reject) => {
      const value = e.target.value;
      this.setState({ [e.target.name]: value });
          return resolve("changed state");
    })
    promise.then(()=>{
      this.ChangeFilters();
    })
  }

  ChangeFilters = () => {     
    var results = this.props.customers.filter(this.useConditions(this.state));
    this.filtered = results;
    this.setState({}) // <- force redraw koska this.filtered ei ole this.statessa.. ( voisi olla kyllä kai, mutta sotkee ehkä liikaa )
  }

  render() {
    const { loading, customers } = this.props;
    const {
      name, address, asty_id,
    } = this.state
    
  var cards = this.filtered.map(item => (
    <Card className="p-card" key={`${item.id}`}>     
      <CardBody>
        <CardTitle>
          {item.name.length >= 60 ? `${item.name.substring(0, 60)} ...` : item.name}
        </CardTitle>
        <Link className="btn btn-primary" to={`/customer/${item.id}`}>
          {'View Customer '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

      return (       
        <div>   
           <Row sm="8">            
          <Input
            style={{maxWidth:150, margin: 5}}
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />
          <Input
            style={{maxWidth:150, margin: 5}}
            type="text"
            name="address"
            id="address"
            placeholder="address"
            value={address}
            onChange={this.handleChange}
          />
          <Input
            style={{maxWidth:150, margin: 5}}
            type="text"
            name="asty_id"
            id="asty_id"
            placeholder="asty_id"
            value={asty_id}
            onChange={this.handleChange}
          />
           </Row>
          <div style={{height: 40}}>
          </div>
      <Row sm="4" className={loading ? 'content-loading' : ''}>      
        {cards}
        <Card className="p-card" style={{height: "100%", alignSelf: "center"}}>
          <Link style={{height: "100%"}} className="btn btn-primary" to={'/createcustomer'}>
            <i className="icon-plus" />
              {' Add new customer'}
            </Link>
        </Card>
      </Row>
      </div>
    );
  }
}
export default CustomerListing;