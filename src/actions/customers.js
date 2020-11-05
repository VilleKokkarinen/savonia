import { Firebase, FirebaseRef } from '../lib/firebase';
import {errorMessages} from '../constants/messages';

export function getCustomers() {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  return dispatch => new Promise(resolve => FirebaseRef.child('customers')
    .on('value', async (snapshot) => {
     
      const data = snapshot.val() || [];
      
      resolve(dispatch({
        type: 'CUSTOMERS_REPLACE',
        data: data,
      }));
      

    })).catch(() => null);
}

export function getCustomerData(UID) {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  return dispatch => new Promise(resolve => FirebaseRef.child('customers/'+UID)
    .on('value', async (snapshot) => {
     
      const data = snapshot.val() || [];
      
      resolve(dispatch({
        type: 'CUSTOMER_REPLACE',
        data: data,
      }));
      

    })).catch(() => null);
}

export function createCustomer(formData) {
  const {
  name,
  address,
  postnumber,
  postlocation,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
   
    // Validation checks
    if (!name) return reject({ message: errorMessages.missingName });
    if (!address) return reject({ message: errorMessages.missingAddress }); 
    if (!postnumber) return reject({ message: errorMessages.missingPostnumber }); 
    if (!postlocation) return reject({ message: errorMessages.missingPostlocation }); 

    var id = FirebaseRef.child('customers/').push().key;
    FirebaseRef.child('mychild').child(id).set({});

    return FirebaseRef.child(`customers`).child(id).set({ id, name,address,postnumber,postlocation })
      .then(async () => {
        return resolve("added customer");
      }).catch(reject);
  }).catch((err) => { throw err.message; });
}


export function deleteCustomer(formData) {
  const {
    UID
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
   
    // Validation checks
    if (!UID) return reject({ message: errorMessages.msisingUID });

    return FirebaseRef.child(`customers`).child(UID).remove()
      .then(async () => {
        return resolve("deleted customer");
      }).catch(reject);
  }).catch((err) => { throw err.message; });
}

export function updateCustomer(formData) {
  const {
  UID,
  name,
  address,
  postnumber,
  postlocation,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
   
    // Validation checks
    if (!UID) return reject({ message: errorMessages.missingUID });
    if (!name) return reject({ message: errorMessages.missingName });
    if (!address) return reject({ message: errorMessages.missingAddress }); 
    if (!postnumber) return reject({ message: errorMessages.missingPostnumber }); 
    if (!postlocation) return reject({ message: errorMessages.missingPostlocation }); 

    // Go to Firebase
    return FirebaseRef.child(`customers/${UID}`).update({ name,address,postnumber,postlocation })
      .then(async () => {

        // Update Redux
        return resolve(getCustomerData(UID));

      }).catch(reject);
  }).catch((err) => { throw err.message; });
}