export const NEW_USER = 'NEW_USER';

export const RegisterAction = (user) => dispatch => {
    fetch('https://talkmind-backend.herokuapp.com/user/register', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }).then((res) =>res.json())
    .then(data =>dispatch({
        type: NEW_USER,
        payload: data
    }))
    .catch(err => {
        console.log(err.message)
    })
}
