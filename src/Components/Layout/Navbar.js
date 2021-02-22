import React from 'react';
import { Link } from 'react-router-dom';
import { LogoutAction } from '../../Redux/Actions/LoginActions';
import { connect } from 'react-redux';



function Navbar(){
    const user = localStorage.getItem('userToken');
    const handleLogout = ()=>{
        localStorage.removeItem('userToken');
        this.props.LogoutAction();
    }
        return(
            <nav className="NavbarItems">
                <h1 className="branding">TalkMind</h1>
                <ul className="nav-menu">
                    <li><Link className="nav-link-log" to="/">Home</Link></li>
                    <li><Link className="nav-link-reg" to="/trending">Trending</Link></li>
                    {user ? <li><a href="/" className="nav-link-out" onClick={handleLogout} to="/">Logout</a></li>: <li><a href="/" className="hidehere" to="/">Logout</a></li>} 
                </ul>
            </nav>
            
        ) 
    
}


export default connect(null, { LogoutAction }) (Navbar);