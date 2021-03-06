import { API_BASE_URL } from '../config';
export const FETCH_CHEESES_REQUEST = 'FETCH CHEESES REQUEST';
export const FETCH_CHEESES_SUCCESS = 'FETCH CHEESES SUCCESS';
export const FETCH_CHEESES_ERROR = 'FETCH CHEESES ERROR';

//sync actions

export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST

})

export const fetchCheesesSuccess = (data) => ({
  type: FETCH_CHEESES_SUCCESS,
  data

})

export const fetchCheesesError = (err) => ({
  type: FETCH_CHEESES_ERROR,
  err
})

//async action; there can be more than one

export const fetchCheeses = () => {
  return function(dispatch) {
    dispatch(fetchCheesesRequest());
    fetch(`${API_BASE_URL}/api/cheeses`).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(cheese => {
      dispatch(fetchCheesesSuccess(cheese));
    }).catch(err => {
      dispatch(fetchCheesesError(err))
    })
  };
};
