import React from 'react'
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
/*
Hansen Ngai
Tyler Philips
4WW3
Assignment 1
*/


/*
This file creates a search bar, drop down bar, and enter search button
*/
export default function Searchbar() {
    return (
        <span >
        /*
        create search bar to enter text
        */
        <input type="text" placeholder="Search here" size="20" style={myStyle}/>

        /*
        create drop down button to select rating of venue from 1 to 5
        */

        <select style={myStyle}>
            <option value="" disabled selected>Select your rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        /*
        create search button
        */  
        <Link to="Results"><button type="button" style={myStyle} placeholder="Submit">Search! </button></Link>
        
        </span>
        
    )
}

const myStyle = {
    display:"inlineblock !important"

  };
