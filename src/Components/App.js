import React from 'react';
import Form from './Form/Form';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="container">
      <Nav links={['vehicle', 'garage', 'repair', 'Confirmation']} />
      <Form />
    </div>
  )
};

export default App;
