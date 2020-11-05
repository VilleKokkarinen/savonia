import status from './status';
import customers from './customers';
import customer from './customer';
import customersMySQL from './customersMySQL';
import customerMySQL from './customerMySQL';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  customers,
  customer,
  customersMySQL,
  customerMySQL,
};
