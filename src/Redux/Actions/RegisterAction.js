export const NEW_USER = 'NEW_USER';

export const RegisterAction = (user) => dispatch => {
    fetch('http://localhost:2500/user/register', {
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