import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../items/Searchbar'

function Header() {
    return (
        <div>
            <h1>welcome</h1>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/submission">Submit an entry</Link> | <Link to="/register">Make an account</Link> 
        </div>
    )
}

export default Header;
