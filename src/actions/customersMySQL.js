
import {errorMessages} from '../constants/messages';

export function getCustomers() {
  return dispatch => new Promise(async (resolve, reject) => {
  await fetch('http://localhost:3000/customers')
  .then(async response => {  
    await response.json()
    .then(data => {
      resolve(dispatch({
        type: 'CUSTOMERSMYSQL_REPLACE',
        data: data,
      }))
    })
  })
  })
}

export function getCustomerData(UID) {
  const params = {
      customerId: UID
  }
  return dispatch => new Promise(async (resolve, reject) => {
    await fetch('http://localhost:3000/customers/'+UID,params).then(async (response) => {  
    await response.json().then(json =>{
      resolve(dispatch({
        type: 'CUSTOMERMYSQL_REPLACE',
        data: json,
      }))
    }).catch((err) => console.log('err', err));
  })
  })
}

export function createCustomer(formData) {
  const {
  NIMI,
  OSOITE,
  POSTINRO,
  POSTITMP,
  } = formData;

  formData.ASTY_AVAIN = '1'

  const putMethod = {
    method: 'POST', // Method itself
    headers: {
     'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
    body: JSON.stringify(formData) // We send data in JSON format
   }

  return dispatch => new Promise(resolve => fetch('http://localhost:3000/customers', putMethod).then(async (response) => {  
    if(response.ok){
      response.json().then(json =>{
        resolve("added customer")
      }).catch((err) => console.log('err', err));
  }}))
}


export function deleteCustomer(formData) {
  const {
    AVAIN
  } = formData;

  const putMethod = {
    method: 'DELETE', // Method itself
    headers: {
     'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
   }

  return dispatch => new Promise(async (resolve, reject) => {
   
    // Validation checks
    if (!AVAIN) return reject({ message: errorMessages.missingUID });

    return fetch('http://localhost:3000/customers/'+AVAIN , putMethod) // DELETE
      .then(async () => {
        return resolve("deleted customer");
      }).catch(reject);
  }).catch((err) => { throw err.message; });
}

export function updateCustomer(formData) {
  const key = formData.AVAIN;
const {
  NIMI,
  OSOITE,
  POSTINRO,
  POSTITMP,
  AVAIN
  } = formData;

  formData.ASTY_AVAIN = '1'

  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
    body: JSON.stringify(formData) // We send data in JSON format
    }

  return dispatch => new Promise(resolve => fetch('http://localhost:3000/customers/'+key, putMethod).then(async (response) => {  
    if(response.ok){
      response.json().then(json =>{
        return resolve(getCustomerData(key));
      }).catch((err) => console.log('err', err));
  }}))
}
