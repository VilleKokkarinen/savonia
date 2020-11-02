import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get this User's Favourite Posts
  */
export function getFavourites(dispatch) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  const ref = FirebaseRef.child(`favourites/${UID}`);

  return ref.on('value', (snapshot) => {
    const favs = snapshot.val() || [];

    return dispatch({
      type: 'FAVOURITES_REPLACE',
      data: favs,
    });
  }).catch((err) => { throw err.message; });
}

/**
  * Reset a User's Favourite Posts in Redux (eg for logout)
  */
export function resetFavourites(dispatch) {
  return dispatch({
    type: 'FAVOURITES_REPLACE',
    data: [],
  }).catch((err) => { throw err.message; });
}

/**
  * Update My Favourites Posts
  */
export function replaceFavourites(newFavourites) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  return () => FirebaseRef.child(`favourites/${UID}`)
  .set(newFavourites).catch((err) => { throw err.message; });
}

/**
  * Get postTypes
  */
export function getPostTypes() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise((resolve, reject) => FirebaseRef.child('postTypes').once('value')
    .then((snapshot) => {
      const data = snapshot.val() || [];
      return resolve(dispatch({ type: 'POSTTYPES_REPLACE', data }));
    }).catch(reject)).catch((err) => { throw err.message; });
}

/**
  * Get Posts        
  */
export function getPosts() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('posts')
    .on('value', (snapshot) => {
      const data = snapshot.val() || [];
      return resolve(dispatch({ type: 'POSTS_REPLACE', data }));
    })).catch((err) => { throw err.message; });
}