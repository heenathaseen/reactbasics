import React from "react";

class Multibutton extends React.Component {
  state = {
    title: ""
  };

  changeTitle = name => this.setState(() => ({ title: name }));

  render() {
    const { title } = this.state;
    return (
      <div className="">
        <button type="button" onClick={() => this.changeTitle("One")}>
          One
        </button>
        <button type="button" onClick={() => this.changeTitle("Two")}>
          Two
        </button>
        <button type="button" onClick={() => this.changeTitle("Three")}>
          Three
        </button>
        <button type="button" onClick={() => this.changeTitle("")}>
          Reset
        </button>
        <p>{title}</p>
      </div>
    );
  }
}

export default Multibutton;