import React from 'react';

class Contactform extends React.Component {
    state = {
        user: '',
        designation: '',
        check: false,
        domain: '',
      };
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleCheckbox = e => {
        this.setState({ [e.target.name]: e.target.checked });
      };
    
      handleSubmit = e => {
      
        e.preventDefault();
        console.log(this.state);
      };
  render() {
   const {user,designation,check,domain}=this.state;
    return (
      <div>
          <input 
          type="text" 
          name="user"
          value={user}
           onChange={this.handleChange}
           placeholder="Enter user name"
           />
          <input 
          type="text" 
          name="designation" 
          value={designation}
          onChange={this.handleChange}
          placeholder="Enter the designation"
          />
          <input 
          type="checkbox" 
          name="check" id=""
            checked={check}
            onChange={this.handleCheckbox}
            />
             <select name="domain" value={domain} onChange={this.handleChange}>
          <option>choose</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <button type="button" onClick={this.handleSubmit}>
          submit
        </button>

        <p>{user}</p>
        <p>{designation}</p>
        <p>{domain}</p>
      
      </div>
    );
  }
}
export default Contactform;
