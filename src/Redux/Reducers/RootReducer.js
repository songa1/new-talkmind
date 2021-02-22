import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

const RootReducer = combineReducers({
    posts: PostReducer,
    login: LoginReducer,
    register: RegisterReducer
})

export default RootReducer