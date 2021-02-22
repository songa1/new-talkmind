import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../Actions/PostActions';

const initialState = {
    posts: [],
    post: {}
}

export default function PostReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                post: action.payload
            }
        case DELETE_POST:
            return {
                ...state
            }
        default:
            return state
    }
}
