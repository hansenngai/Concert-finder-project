import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../images/logo.png'
import { Button } from 'reactstrap';
function Header() {
    return (
        <div>
        	
        	<img src={logo} width="22%" height="23%"></img>
        	<Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/submission">Submit an entry</Link>
        </div>
    )




}

export default Header;




