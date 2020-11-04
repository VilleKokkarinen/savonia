import Store from '../store/customer';

export const initialState = Store;
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'CUSTOMERS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'CUSTOMER_REPLACE':{
      let customer = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {        
        customer = {
          id: action.data.id,
          name: action.data.name,
          address: action.data.address,
          postnumber: action.data.postnumber,
          postlocation: action.data.postlocation,
          registerdate: action.data.registerdate,
          asty_id: action.data.asty_id,
        }
    }
      return {
      error: null,
      loading: false,
      customer: customer,
    }
  } 
    default:
    return state;
  }
}
