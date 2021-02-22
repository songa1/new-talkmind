import {NEW_USER} from '../Actions/RegisterAction';

const initialState = {
    user: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}