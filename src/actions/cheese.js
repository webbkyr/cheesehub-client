export const FETCH_CHEESES_REQUEST = 'FETCH CHEESES REQUEST';
export const FETCH_CHEESES_SUCCESS = 'FETCH CHEESES SUCCESS';
export const FETCH_CHEESES_ERROR = 'FETCH CHEESES ERROR';

//sync actions

export const fetchCheesesRequest = () => {
  type: FETCH_CHEESES_REQUEST

}

export const fetchCheesesSuccess = (data) => {
  type: FETCH_CHEESES_SUCCESS,
  data

}

export const fetCheesesError = (err) => {
  type: FETCH_CHEESES_ERROR,
  err
}

//async action

export const fetchCheeses = () => {
  return function(dispatch) {
    fetch('http://localhost:8080/api/cheeses').then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(cheese => {
      dispatch(fetchCheesesSuccess(cheese));
    });
  };
};