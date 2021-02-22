import { LOGIN_USER, LOGOUT_USER } from '../Actions/LoginActions';

const initialState = {
    auth: false
}

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                auth: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                auth: false
            }
        default:
            return state
    }
}