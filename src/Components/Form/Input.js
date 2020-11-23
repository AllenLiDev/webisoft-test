import React from 'react';

const Input = (props) => {

  const updateValue = (event) => {
    props.setInputValue(event.target.value);
  }

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text">{props.label}</label>
      </div>
      <input type="text" className="form-control" placeholder={props.label} aria-label={props.label} aria-describedby="basic-addon1" onChange={updateValue} required />
    </div>
  )
}

export default Input;