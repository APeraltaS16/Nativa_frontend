import React from 'react';
import './Rules.css';

const Rules = ({title, text,index, src}) => {
  return (
    <div className="rule_card">
      <h1 className="rule_title">{index}.  {title}</h1>
      <p className="rule_text">{text}</p>


      {src? <img className="img" src={src}/>:null}

    </div>
  )
}

export default Rules;
