export const LOGIN_USER = 'LOGIN_USER';

export const LOGOUT_USER = 'LOGOUT_USER';

export const LoginAction = (userCreds) => dispatch => {
    fetch('https://talkmind-backend.herokuapp.com/user/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userCreds)
    })
    .then(response =>response.json())
    .then(data => {
      if (data.status === 200){
        localStorage.setItem('userToken', data.token);
        console.log(data.user)
        localStorage.setItem('userData', JSON.stringify(data.user));
        dispatch({
          type: "LOGIN_USER",
          payload: data.user
        })
      }else {
        console.log('You can not login!')
      }
    })
}

export const LogoutAction = () => dispatch => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('userData');
  dispatch({
    type: 'LOGOUT_USER'
  })
}
