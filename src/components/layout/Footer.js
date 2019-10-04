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
    color:"white",
    left:0,
    bottom:-10,
    position:"fixed",
    backgroundColor:"#00CED5",
    textAlign:"center",
    width:"100%"
  };



export default Header;
