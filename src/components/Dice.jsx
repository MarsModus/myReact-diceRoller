import React from "react";



function Dice(props){
    return <img 
    onClick={props.onDieClick} 
    src={props.src} 
    alt={props.alt}
    >
    </img>  
}

export default Dice;