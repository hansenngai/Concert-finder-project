import React from 'react'
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


export default function Searchbar() {
    return (
        <div>
        <input type="text" placeholder="Search here"/>

        <select>
            <option value="" disabled selected>Select your rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="Results"><button type="button" placeholder="Submit">Search!</button></Link>
        
        </div>
        
    )
}
