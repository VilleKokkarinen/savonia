import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>
          Web React App
        </h1>
        <p className="lead">
         Valmispohja, joka on tullut tehtyä joskus ~2017-2018 ja sittemmin kehitelty eteenpäin
        </p>     
      </Jumbotron>
    </Row>
    <Row className="pt-md-2">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-map" />
          {' '}
          Routing
        </h3>
        <p>
          React Router hoitaa reitittämisen
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router" className="btn btn-primary">
            React Router Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-fire" />
          {' '}
          Firebase
        </h3>
        <p>
          Firebase ilmainen ja helppokäyttöinen NoSQL + hostaus (+ google cloud funktiot) palvelu
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/database/web/start" className="btn btn-primary">
            Firebase Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-organization" />
          {' '}
          Redux
        </h3>
        <p>
          tilanhallintaa
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/docs/introduction/" className="btn btn-primary">
            Redux Docs
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-md-5 pb-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-layers" />
          {' '}
          Redux Persist
        </h3>
        <p>
          pitää dataa muistissa reduxilla, jotta lataukset ovat nopeampia, ja serveriä ei välttämättä tarvitse aina välissä.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rt2zz/redux-persist" className="btn btn-primary">
            Redux Persist Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-drop" />
          {' '}
          Web Styles
        </h3>
        <p>
          Webpack, SCSS, Bootstrap & ReactStrap
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://reactstrap.github.io/components/alerts/" className="btn btn-primary">
            ReactStrap Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-user-following" />
          {' '}
          Auth
        </h3>
        <p>
          Firebause auth, tässä apissa poistettu autentikaatio käytöstä. (ei tarvitse kirjautua sisään tms.)
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth/" className="btn btn-primary">
            Firebase Auth Docs
          </a>
        </p>
      </Col>
    </Row>
    <hr />  
  </div>
);

export default About;
