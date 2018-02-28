import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return(dispatch) => {
    request.then(({data}) => {
      dipatch({type: 'FETCH_PROFILES', payload: data})
    });
  };
}
