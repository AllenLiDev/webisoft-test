import React from 'react';

const Select = (props) => {
  const options = props.options.map((option, i) =>
    <option key={i} value={option}>{option}</option>
  );

  const updateSelection = (event) => {
    props.setSelectedValue(event.target.value);
  }

  return (
    <div className="mb-3">
      <div className="input-group is-invalid">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="validatedInputGroupSelect">{props.label}</label>
        </div>
        <select className="custom-select" id="validatedInputGroupSelect" onChange={updateSelection} required>
          {options}
        </select>
      </div>
    </div>
  )
};

export default Select;