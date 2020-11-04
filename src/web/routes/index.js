import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/Templates/Nothing';
import TemplateSidebar from '../components/Templates/Sidebar';

// Routes
import Home from '../components/Home';

import CustomersContainer from '../../containers/Customers';
import CustomerListingComponent from '../components/Customer/Listing';
import CustomerSingleComponent from '../components/Customer/Single';

import UpdateCustomerContainer from '../../containers/UpdateCustomer';
import UpdateCustomer from '../components/Customer/Update';


import NewCustomerContainer from '../../containers/NewCustomer';
import NewCustomer from '../components/Customer/New';

import Error from '../components/UI/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />  
    <Route
      path="/customers"
      render={props => (
        <TemplateSidebar pageTitle="Customers">
          <CustomersContainer {...props} Layout={CustomerListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/customer/:id"
      render={props => (
        <TemplateSidebar pageTitle="Customer View">
          <CustomersContainer {...props} Layout={CustomerSingleComponent} />
        </TemplateSidebar>
      )}
    />  
     <Route
      path="/updatecustomer/:id"
      exact
      render={props => (
        <TemplateSidebar pageTitle="Customer Update View">
          <UpdateCustomerContainer {...props} Layout={UpdateCustomer} />
        </TemplateSidebar>
      )}
    />  
     <Route
      path="/createcustomer"
      exact
      render={props => (
        <TemplateSidebar pageTitle="New Customer View">
          <NewCustomerContainer {...props} Layout={NewCustomer} />
        </TemplateSidebar>
      )}
    />  
    <Route
      render={props => (
        <TemplateSidebar pageTitle="404 - Page not found">
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
