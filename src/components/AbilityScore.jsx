import React, {useState} from "react";

function AbilityScore(props){
    const [score, setScore] = useState(10);

    function incScore () {
        setScore(score +1);
    }

    function decScore () {
        setScore(score -1);
    }

    return(
    <div className="ability-score--container">
        <h2>{props.name}</h2>
        <div className="ability-score">
            <button onClick={incScore}>+</button>
            <h3 id="test">{score}</h3>
            <button onClick={decScore}>-</button>
        </div>
        <h4>{Math.floor((score - 10)/2)}</h4>
    </div>
    )
}

export default AbilityScore;