import React from "react";

function ChoiceCard(props) {
  return (
    <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
      <h1>{props.title}</h1>
      <img className='card-size' src={props.imgURL} alt={props.title} />
      <h3>{props.winner ? 'Won' : 'Loss'}</h3>
    </div>
  );
}

export default ChoiceCard;
