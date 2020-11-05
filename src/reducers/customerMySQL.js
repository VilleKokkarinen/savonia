import Store from '../store/customerMySQL';

export const initialState = Store;
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'CUSTOMERMYSQL_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'CUSTOMERMYSQL_REPLACE':{
      let customerMySQL = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {        
        customerMySQL = {
          AVAIN: action.data.AVAIN,
          NIMI: action.data.NIMI,
          OSOITE: action.data.OSOITE,
          POSTINRO: action.data.POSTINRO,
          POSTITMP: action.data.POSTITMP,
          LUONTIPVM: action.data.LUONTIPVM,
          ASTY_ID: action.data.ASTY_ID,
        }
    }
      return {
      error: null,
      loading: false,
      customerMySQL: customerMySQL,
    }
  } 
    default:
    return state;
  }
}
