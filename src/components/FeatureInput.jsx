import React from "react";

function FeatureInput(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="featureInput">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default FeatureInput;
