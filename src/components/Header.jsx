import React from "react";

function Header(props){
    return (
        <header>
            <h1>Dice Roller v1</h1>
            <div>
                <input name="characterName" type="text"></input>
                <h4>Character Name</h4>
            </div>
            <div>
                <input name="characterClass" type="text"></input>
                <h4>Character Class</h4>
            </div>
            <div>
                <input name="characterLevel" type="number" value={props.level}></input>
                <h4>Character Level</h4>
            </div>
        </header>
    )
}

export default Header;