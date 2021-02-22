import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = ()=>{
    return(
        <div className='not-found'>
            <h1>404</h1>
            <p>Sorry, this page is not found!</p>
            <Link to='/'>Go back to Home</Link>
        </div>
    )
};

export default NotFound;