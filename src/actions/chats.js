import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get Chats
  */
export async function getUserData(users) {
  const pArray = users.map(async (user) => {
    const response = await FirebaseRef.child('users').child(user.id)
      .once('value').then((snapshot) => {
        const data = snapshot.val();
        return data;
      })
      .catch(() => null);
    return response;
  });
  const usersarray = await Promise.all(pArray);
  return usersarray;
}
export async function getMessages(chatId) {
  const response = await FirebaseRef.child('chat-messages').child(chatId)
    .once('value').then((snapshot) => {
      const data = snapshot.val();
      return Object.values(data);
    })
    .catch(() => null);
  const final = await response;
  return final;
}
export function getChats() {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  return dispatch => new Promise(resolve => FirebaseRef.child('chats')
    .on('value', async (snapshot) => {
     
      const data = snapshot.val() || [];
      const chats = Object.values(data).map(async item => ({
        id: item.chatId,
        name: item.name,
        authorizedUsers: await getUserData(Object.values(item.authorizedUsers)),
        messages: await getMessages(item.chatId),
      }));
      const readychats = await Promise.all(chats);
      const finalized = [];
      
      readychats.forEach((chat) => {
        if (chat.authorizedUsers[0] !== null) {
          finalized.push(chat);
        }
      });
      const finalData = await Promise.all(finalized);
      if (finalData.length >= 1) {
        resolve(dispatch({
          type: 'CHATS_REPLACE',
          data: finalData,
        }));
      }
    })).catch(() => null);
}
