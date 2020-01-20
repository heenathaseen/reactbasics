import React from 'react';
import './Form.scss';

class Form extends React.Component {


    state = {

        firstname: "",
        lastname:"",

    }
  render() {
      const {firstname,lastname} = this.state;

    return (
      <div className="form">
        <form action="get">
          <input type="text" value={firstname} />
          <br />
          <input type="text" value={lastname} />
          <br />
          <input type="checkbox" name="" id="" />
          <br />
          <select name="choose" id="">
            <option>choose</option>
            <option>mech</option>
            <option>eee</option>
            <option>cse</option>


          </select>
          <br />
          <input type="submit" value="submit" />
        </form>

      </div>
    );
  }
}

export default Form;
