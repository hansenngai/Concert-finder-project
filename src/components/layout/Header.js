
import { Link } from 'react-router-dom'
import logo from './../../images/logo.png'
import React from 'react';
import Searchbar from '../../components/items/Searchbar';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
function Header() {
	    	
    	
    return (
   
        <div style={myStyle}>
        		<table>
        		<tr>
        		<td width="220">
        		<Link to="/"><img src={logo} width="200" height="60"  ></img></Link> 
        		</td>

        		<td>
		        	<Link to="/"> <Button>Home</Button></Link> 	
		        	<Link to="/submission"><Button>Submit Entry</Button></Link>    
		        </td>

        		<td >
        		<ButtonGroup  style={myStyle}>
	        		<input type="text" placeholder="Search here" />	
	        		
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

const myStyle = {
    color:"#black",
    position:"center",
    width:"100%",
    backgroundColor:"#00CED5",
    textAlign:"center"
  };

export default Header;




