import React from 'react';
import './Form.scss';
import Contactform from './Contactform';
import Validateform from './Validateform';

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <Contactform />
        <Validateform />
      </div>
    );
  }
}

export default Form;
