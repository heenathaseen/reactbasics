import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    person: null
  };

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
    fetch("https://api.randomuser.me/")
      .then(response => response.json())
      .then(data => this.setState({ person: data.results[0] }));
  }

  componentWillReceiveProps() {
    console.log("receive props");
  }

  shouldComponentUpdate() {
    console.log("should update");
  }

  componentWillUpdate() {
    console.log("will update");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    const { person } = this.state;
    return (
      <>
        {person ? (
          <>
            <p>{person.name.title}</p>
            <p>{person.name.first}</p>
            <p>{person.name.last}</p>
            <p>{person.email}</p>
            <img src={person.picture.large} alt="" />
          </>
        ) : (
          <p>No data</p>
        )}
      </>
    );
  }
}

export default LifeCycle;
