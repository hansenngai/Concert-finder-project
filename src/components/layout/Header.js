import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../images/logo.png'
function Header() {
    return (
        <div>
        	
        	<img src={logo} width="200" height="60"></img>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/submission">Submit an entry</Link>
        </div>
    )




}

export default Header;
