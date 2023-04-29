import { createStore } from 'redux';

const initialState = {
    loading: false,
};

function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
}

const store = createStore(loadingReducer);

export default store;