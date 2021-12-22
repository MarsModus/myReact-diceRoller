import React from "react";
import AbilityScore from "./AbilityScore";
import stats from "../stats";

function CharacterAttributes(){

    return(
        <section className="char-stats">
            {stats.map((stats, index) => {
                return (
                    <AbilityScore 
                    key={index}
                    id={index}
                    name={stats.name}
                    score={stats.score}
                />
                    );
                })}
        </section>
    )
}

export default CharacterAttributes;