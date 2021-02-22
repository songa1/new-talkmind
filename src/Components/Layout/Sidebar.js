import React from 'react';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

function Sidebar() {
    return(
        <div>
            <Login className="login"/>
            <p className='or'>Or</p>
            <Register className="register"/>
        </div>     
    ) 
}



export default Sidebar;