import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR } from '../actions/cheese';

const initialState = {
 cheeses: [],
 loading: false,
 error: null
}
 
export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_CHEESES_REQUEST:
    return Object.assign({}, state, {loading: true})
    break;

    case FETCH_CHEESES_SUCCESS:
    return Object.assign({}, state, {loading: false, cheeses: action.data, error: null})
    break;

    case FETCH_CHEESES_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    default:
    break;
  }
  return state;
}