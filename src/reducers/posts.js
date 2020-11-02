import Store from '../store/posts';

export const initialState = Store;

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'FAVOURITES_REPLACE': {
      return {
        ...state,
        favourites: action.data || [],
      };
    }
    case 'POSTTYPES_REPLACE': {
      return {
        ...state,
        error: null,
        loading: false,
        postTypes: action.data,
      };
    }
    case 'POSTS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'POSTS_REPLACE': {
      let posts = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        posts = Object.values(action.data).map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
          details: item.details,
          info: item.info,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        posts,
      };
    }
    default:
      return state;
  }
}
