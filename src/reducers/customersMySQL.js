import Store from '../store/customersMySQL';

export const initialState = Store;
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'CUSTOMERSMYSQL_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }   
    case 'CUSTOMERSMYSQL_REPLACE': {
      let customersMySQL = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        customersMySQL = Object.values(action.data).map(item => ({
          AVAIN: item.AVAIN,
          NIMI: item.NIMI,
          OSOITE: item.OSOITE,
          POSTINRO: item.POSTINRO,
          POSTITMP: item.POSTITMP,
          ASTY_ID: item.ASTY_ID,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        customersMySQL: customersMySQL,
      };
    }
    default:
      return state;
  }
}
