import { createStore } from 'redux';

const initialState = {
    loading: false,
    books: [],
    error: '',
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload.loading,
            error: '',
          };
        default:
          return state;
      }
}

const store = createStore(rootReducer);

export default store;