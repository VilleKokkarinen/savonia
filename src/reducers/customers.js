import Store from '../store/customers';

export const initialState = Store;
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'CUSTOMERS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }   
    case 'CUSTOMERS_REPLACE': {
      let customers = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        customers = Object.values(action.data).map(item => ({
          id: item.id,
          name: item.name,
          address: item.address,
          postnumber: item.postnumber,
          postlocation: item.postlocation,
          registerdate: item.registerdate,
          asty_id: item.asty_id,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        customers: customers,
      };
    }
    default:
      return state;
  }
}
