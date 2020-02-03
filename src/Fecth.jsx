import React from 'react';

class Fetch extends React.Component {
    state={
        person:null,
        loading:true
    };
    fetchdata = () =>{fetch('https://api.randomuser.me/')
    .then(response=> response.json())
    .then(data =>this.setState({person:data.results[0],loading:false}))};
  render() {
      const {person,loading} = this.state;
    return (
      <div>
                <button type="button" onClick={this.fetchdata}>Fetch</button>

                {loading && <p>Loading......</p>}
                {person ? (
                    <> <img src={person.picture.large} alt=""/>
                    <p>{person.name.first}</p>
                    <p>{person.name.last}</p>
                    <p>{person.gender}</p>
                    <p>{person.email}</p></>
                ):(<p>No data,Click Fetch button </p>)}
      </div>
    );
  }
}

export default Fetch;
