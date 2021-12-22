import React, {useState} from "react";
import diceBox from "../dice";
import Dice from "./Dice";

function DiceArea(){
    const [result, setResult] = useState([]);

    function getDice(diceBox){
        return (
            <Dice 
            key={diceBox.id} 
            src={diceBox.src} 
            alt={diceBox.alt} 
            onDieClick={rollDie}
            />
        )
    }

    function rollDie(event){
        //Modify image's alt attribute text, to extract the number of sides
        const dieType = event.target.alt;
        const slicedText = dieType.slice(1, 4);
        const dieSides = parseInt(slicedText, 10)
        setResult("Your d" + dieSides + " roll result was a " + Math.floor(Math.random()*dieSides +1))
    }

    return(
        <section>
            <div className="dice-container">
                {diceBox.map(getDice)}
            </div>
            <div className="result">
                <h2>{result}</h2>
            </div>
        </section>
    )
}

export default DiceArea;