import React from 'react';
import Copyright from './copyright';

const itemflex ={
    display : "flex",
    flexDirection : "row",
    gap : "10px",
    justifyContent : "center",
};

const itembody={
    margin : "0 auto",
    backgroundColor : "green",
    padding : "20px",
    paddingBottom : "3rem",
    width : "fit-content",
    borderRadius: "10px"
};

const itemtext={
    color : "white",
    fontSize : "20px",
    fontWeight : "900",
    textTransform: "capitalize"
};

const button ={
    color : "green",
    fontSize : "17px",
    fontWeight : "800",
    fontFamily: "Georgia",
    border : "3px solid white",
    borderRadius : "7px",
    width : "150px",
    height : "40px",
    marginTop: "25px"
};

function Achieved() {
    document.getElementById("firstAct").style.textDecoration="line-through"
}
function NotAchieved(params) {
    document.getElementById("firstAct").style.textDecoration=null
}

function Ticked() {
    document.getElementById("secondAct").style.textDecoration="line-through"
}
function NotTicked(params) {
    document.getElementById("secondAct").style.textDecoration=null
}

function Accomplished() {
    document.getElementById("thirdAct").style.textDecoration="line-through"
}
function NotAccomplished(params) {
    document.getElementById("thirdAct").style.textDecoration=null
}

function Read() {
    document.getElementById("fourthAct").style.textDecoration="line-through"
}
function NotRead(params) {
    document.getElementById("fourthAct").style.textDecoration=null
}

function Strolled() {
    document.getElementById("fifthAct").style.textDecoration="line-through"
}
function NotStrolled(params) {
    document.getElementById("fifthAct").style.textDecoration=null
}


function Todo(props) {
    return(
        <div style={itembody}>
        <h1 style={{textAlign : "center",
        color:"white",
        fontSize : "25px",
        fontFamily : "Georgia"}}>ToDo App</h1>
        <p style={{color:"white",
        fontSize : "16px",
        fontFamily : "Georgia",
        textAlign :"center"}}>👉🏽 Click on Done to strike out your activity</p>
        <p style={{color:"white",
        fontSize : "16px",
        fontFamily : "Georgia",
        textAlign : "center"}}>👉🏽 Click on Not Done to reverse your action </p>
        <div style={itemflex} id="firstAct">
        <h5 style={itemtext}>{props.firstText}</h5>
        <button onClick={Achieved} style={button}>Done</button>
        <button onClick={NotAchieved} style={button}>Not Done</button>
        </div>
        <div style={itemflex} id="secondAct">
        <h5 style={itemtext}>{props.secondText}</h5>
        <button onClick={Ticked} style={button}>Done</button>
        <button onClick={NotTicked} style={button}>Not Done</button>
        </div>
        <div style={itemflex} id="thirdAct">
        <h5 style={itemtext}>{props.thirdText}</h5>
        <button onClick={Accomplished} style={button}>Done</button>
        <button onClick={NotAccomplished} style={button}>Not Done</button>
        </div>
        <div style={itemflex} id="fourthAct">
        <h5 style={itemtext}>{props.fourthText}</h5>
        <button onClick={Read} style={button}>Done</button>
        <button onClick={NotRead} style={button}>Not Done</button>
        </div>
        <div style={itemflex} id="fifthAct">
        <h5 style={itemtext}>{props.fifthText}</h5>
        <button onClick={Strolled} style={button}>Done</button>
        <button onClick={NotStrolled} style={button}>Not Done</button>
        </div>,
        <Copyright/>  
        </div>
    )
}
export default Todo