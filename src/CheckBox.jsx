import React, { Component } from "react";

class CheckBoxOptions extends Component {
  state = {
    metal: false,
    wood: false,
    plastic: false
  };

  handleChangeName = event => {
    console.log(event.target.name, event.target.checked);
    this.setState({
      [event.target.name]: event.target.checked
    });
    if (event.target.checked) {
        this.props.add(event.target.name);
    } else {
        this.props.remove(event.target.name);
    }
  };

  render() {
    const { metal, wood, plastic } = this.state;
    return (
      <>
      <label>
        <input type="checkbox" name="metal" checked={metal} onChange={this.handleChangeName}/>Metal
      </label>
      <label>
        <input type="checkbox" name="wood" checked={wood} onChange={this.handleChangeName}/>Wood
      </label>
      <label>
        <input type="checkbox" name="plastic" checked={plastic} onChange={this.handleChangeName}/>Plastic
      </label>
      </>
    );
  }
}

class CheckBox extends Component {
    state = {
        selected: []
      };

    addSelected = select =>
      this.setState(({ selected }) => ({ selected: [...selected, select] }));

    removeSelected = select =>
      this.setState(({ selected: this.state.selected.filter(s => s !== select ) }));
    
    render() {
        console.log(this.state.selected)
        return (
            <>
                <h3>Material</h3>
                <CheckBoxOptions add={this.addSelected} remove={this.removeSelected}/>   
                {this.state.selected && this.state.selected.map(s => <p>{s}</p>)}
            </>
        );
    }
}

export default CheckBox;