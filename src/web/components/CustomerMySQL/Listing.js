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
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class CustomerListing extends React.Component{
  static propTypes = {
    customersMySQL: PropTypes.any.isRequired // array customereja jotka tulee containerista
  };
  
  constructor(props) {
    super(props);
    this.state = { // sisältää filtteriehdot, joiden mukaan suodattaa customereja
        NIMI: '',
        OSOITE: '',
        AVAIN: '',
        ASTY_ID: ''
    };
    this.filteredMySQL = this.props.customersMySQL;

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Ottaa kaikki hakuehdot ja filtteröi arrayn niiden mukaan.
   */
  customerFilter = search => a => Object.keys(search).every(k => 
    String(a[k]).toLowerCase().includes(String(search[k]).toLowerCase()) || // x sisältää y:n tekstiä
    Array.isArray(search[k]) && search[k].includes(a[k]) || // x on joku mitä on arrayssa [x,y,z]
    typeof search[k] === 'object' && +search[k].min <= a[k] && a[k] <= +search[k].max || // on jonkin arvoalueen välissä
    typeof search[k] === 'function' && search[k](a[k]) // tai funktiolla
);

/**
 * filtterien tekstin päivitysfunktio
 */
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
    var results = this.props.customersMySQL.filter(this.customerFilter(this.state)); // päivitä filtterien data
    this.filteredMySQL = results;
    this.setState({}) // <- force redraw koska this.filtered ei ole this.statessa.. ( voisi olla kyllä kai, mutta sotkee ehkä liikaa )
  }

  render() {

    const { loading, customersMySQL } = this.props;

    const {
      NIMI, OSOITE, AVAIN, ASTY_ID
    } = this.state

  var cards = this.filteredMySQL.map(item => ( // rakennetaan näytettävät kortit
    <Card className="p-card" key={`${item.AVAIN}`}>
      <CardBody>
        <CardTitle>
          {item.NIMI.length >= 60 ? `${item.NIMI.substring(0, 60)} ...` : item.NIMI}
        </CardTitle>
        <Link className="btn btn-primary" to={`/customerMySQL/${item.AVAIN}`}>
          {'View Customer '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

      return (       
        <div>
          <Button onClick={()=>this.ChangeFilters} >{'piirrä tiedot uusiksi (react ei aina piirrä tätä uudelleen vaikka propsit päivittyy..)'}</Button>
           <Row sm="8">
          <Input
            style={{maxWidth:150, margin: 5}}
            type="text"
            name="NIMI"
            id="NIMI"
            placeholder="NIMI"
            value={NIMI}
            onChange={this.handleChange}
          />
          <Input
            style={{maxWidth:150, margin: 5}}
            type="text"
            name="OSOITE"
            id="OSOITE"
            placeholder="OSOITE"
            value={OSOITE}
            onChange={this.handleChange}
          />
          <Input
            style={{maxWidth:150, margin: 5}}
            type="text"
            name="ASTY_ID"
            id="ASTY_ID"
            placeholder="ASTY_ID"
            value={ASTY_ID}
            onChange={this.handleChange}
          />
           </Row>
          <div style={{height: 40}}>
          </div>
      <Row sm="4" className={loading ? 'content-loading' : ''}>      
        {cards}
        <Card className="p-card" style={{height: "100%", alignSelf: "center"}}>
          <Link style={{height: "100%"}} className="btn btn-primary" to={'/createcustomerMySQL'}>
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