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




import CustomerListingComponentMySQL from '../components/CustomerMySQL/Listing';
import CustomerSingleComponentMySQL from '../components/CustomerMySQL/Single';
import CustomersContainerMySQL from '../../containers/CustomersMySQL';

import NewCustomerContainerMySQL from '../../containers/NewCustomerMySQL';
import UpdateCustomerContainerMySQL from '../../containers/UpdateCustomerMySQL';

import UpdateCustomerMySQL from '../components/CustomerMySQL/Update';
import NewCustomerMySQL from '../components/CustomerMySQL/New';



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
      path="/customersMySQL"
      render={props => (
        <TemplateSidebar pageTitle="CustomersMySQL">
          <CustomersContainerMySQL {...props} Layout={CustomerListingComponentMySQL} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/customerMySQL/:id"
      render={props => (
        <TemplateSidebar pageTitle="CustomerMySQL View">
          <CustomersContainerMySQL {...props} Layout={CustomerSingleComponentMySQL} />
        </TemplateSidebar>
      )}
    />  
     <Route
      path="/updatecustomerMySQL/:id"
      exact
      render={props => (
        <TemplateSidebar pageTitle="Customer Update MySQL View">
          <UpdateCustomerContainerMySQL {...props} Layout={UpdateCustomerMySQL} />
        </TemplateSidebar>
      )}
    />  
     <Route
      path="/createcustomerMySQL"
      exact
      render={props => (
        <TemplateSidebar pageTitle="New Customer MySQL View">
          <NewCustomerContainerMySQL {...props} Layout={NewCustomerMySQL} />
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
