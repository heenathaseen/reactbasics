import React, { Component } from "react";

class Validateform extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    const { name, email, password } = this.state;

    if (!name) {
      nameError = "Name cannot be Blank";
    }

    if (!email.includes("@")) {
      emailError = "Invalid Email, Enter valid Email";
    }

    if (password.length <= 5) {
      passwordError = "Password should be between 5 and 10 characters";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  render() {
    const {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError
    } = this.state;
    return (
      <div className="form-validate">
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter user name"
        />
        <p style={{ color: "red" }}>{nameError}</p>
        <input
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Enter your Email"
        />
        <p style={{ color: "red" }}>{emailError}</p>
        <input
          name="password"
          type="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Enter your Password"
        />
        <p style={{ color: "red" }}>{passwordError}</p>
        <button type="button" onClick={this.handleSubmit}>
          submit
        </button>

        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
      </div>
    );
  }
}

export default Validateform;
