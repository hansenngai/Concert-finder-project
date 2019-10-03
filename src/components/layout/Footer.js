import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
    return (
        <div>
            <h1 style={myStyle}>footer</h1>
        </div>
    )
}

const myStyle = {
    color:"red",
    left:0,
    bottom:0,
    position:"fixed",
    backgroundColor:"#26D5CF",
    textAlign:"center",
    width:"100%"
  };



export default Header;
