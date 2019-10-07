import { Link } from 'react-router-dom'
import logo from './../../images/logo.png'
import React from 'react';
import Searchbar from '../../components/items/Searchbar';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
/*
Hansen Ngai
Tyler Philips
4WW3
Assignment 1
*/

/*
This File creates a header for the website
*/
function Header() {
	    	
    	
    return (
   
        <div style={myStyle}>
        		
        		<table>
		        		<tr>
		        		<td width="220">
		        		<Link to="/"><img src={logo} width="200" height="60"  ></img></Link> 
		        		</td>

		        		<td>
				        	<Link to="/"> <Button color="secondary"> Home</Button></Link> 	
				        	<Link to="/submission"><Button color="secondary">Submit Entry</Button></Link>    
				        </td>

		        		<td >
		        		<ButtonGroup style={{backgroundColor:"white"} }>

			        		<input type="text" style={{backgroundColor:"white"}} placeholder="Search here" />	
			        		
			        		<select height="50">
					            <option value="" disabled selected>Select rating</option>
					            <option value="1">1</option>
					            <option value="2">2</option>
					            <option value="3">3</option>
					            <option value="4">4</option>
					            <option value="5">5</option>
					        </select>

					        
					        <Link to="Results"><button type="button" style={myStyle} placeholder="Submit">Search </button></Link>

				        </ButtonGroup>
				        </td>

		        		<td> 
				        	<Link to="/login"><Button>Login</Button></Link> 
				        	<Link to="/register"> <Button color="primary">Sign Up</Button></Link> 
				        </td>
				        </tr>
		        </table>
         	
        </div>
    )

}
const searchStyle = { backgroundColor:"#white"};

const myStyle = {
    color:"#black",
    position:"center",
    left:0,
    width:"100%",
    backgroundColor:"#00CED5",
    textAlign:"center"
  };

export default Header;




