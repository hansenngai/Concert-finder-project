import React from 'react'
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


export default function Searchbar() {
    return (
        <span >
        <input type="text" placeholder="Search here" size="20" style={myStyle}/>

        <select style={myStyle}>
            <option value="" disabled selected>Select your rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="Results"><button type="button" style={myStyle} placeholder="Submit">Search! </button></Link>
        
        </span>
        
    )
}

const myStyle = {
    display:"inlineblock !important"

  };
