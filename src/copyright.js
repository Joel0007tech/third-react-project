import React from 'react';

const date = new Date();
const Year = date.getFullYear()

const styling ={
    textAlign : "center",
    color : "white",
    fontSize : "16px",
    fontFamily : "Georgia"
}
function Copyright() {
   return <p style={styling}>All Rights Reserved, Joel Copyright © {Year} </p> 
}
export default Copyright