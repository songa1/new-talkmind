import { LoginReducer } from '../../Redux/Reducers/LoginReducer';
import {  LOGIN_USER } from '../../Redux/Actions/LoginActions';

describe('Login tests', () => {
    const initialState = {
        auth: false
    }

    it('should return the initialState for no action', () =>{
        const reducer = LoginReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    })

    it('should return success with true when login success', () =>{
        const action ={
            type: LOGIN_USER
        } 
        const reducer = LoginReducer(initialState, action);
        expect(reducer).toEqual({
            ...initialState,
            auth: true
            }
        );

    })
})