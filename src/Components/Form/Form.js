import React, { useState, useEffect } from 'react';
import Input from './Input';
import Select from './Select';

const Models = {
  Honda: [null, 'CRV', 'Civic', 'Accord'],
  Toyota: [null, 'Rav4', 'Corolla', 'Camry'],
  Ford: [null, 'Truck', 'Car', 'BigCar'],
}

const Form = (props) => {
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMake, setSelectedMake] = useState('Honda');
  const [selectedModel, setSelectedModel] = useState();
  const [selectedTrim, setSelectedTrim] = useState();
  const [odometerValue, setOdometerValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Year: ${selectedYear}, Make: ${selectedMake}, Model: ${selectedModel}, Trim: ${selectedTrim}, odometer: ${odometerValue}`
    );
  }

  useEffect(() => {
    // get db info here
  });

  const changeYear = year => setSelectedYear(year);
  const changeMake = make => setSelectedMake(make);
  const changeModel = model => setSelectedModel(model);
  const changeTrim = trim => setSelectedTrim(trim);
  const changeOdometer = value => setOdometerValue(value);

  return (
    <form className="p-5 flex form" onSubmit={handleSubmit}>

      <h3>Tell us about your vehicle</h3>

      <Select label="Year" options={[null, "1999", "2000", "2001"]} setSelectedValue={changeYear} />
      <Select label="Make" options={[null, "Honda", "Toyota", "Ford"]} setSelectedValue={changeMake} />
      <Select label="Model" options={Models[selectedMake]} setSelectedValue={changeModel} />
      <Select label="Trim" options={[null, "Standard", "Plus", "Premium"]} setSelectedValue={changeTrim} />
      <Input label="Odometer" setInputValue={changeOdometer} />

      <h3 className="my-5 text-center">Maximum Repair Loan: $3000</h3>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" required />
        <label className="form-check-label" htmlFor="defaultCheck1">
          A FIX4 repair loan is NOT applicable on accessories such as audio system, mats, lift kits, window tints, etc or any uninstalled parts or equipment.
        </label>
      </div>

      <div className="pt-3 d-flex align-items-end flex-column">
        <button type="submit" className="btn btn-primary">Continue</button>
      </div>

    </form>
  )
}

export default Form;