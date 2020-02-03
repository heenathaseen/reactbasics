import React from 'react';

class Fetcharray extends React.Component {
    state = {
        person:[],
       
    };
    fetchdata = () =>{fetch('https://api.randomuser.me/?results=10')
    .then(response=> response.json())
    .then(data =>this.setState({person:data.results}))};
  render() {
      const {person} = this.state;
    return (
      <div>
                <button type="button" onClick={this.fetchdata}>Fetch</button>

                
                {person ? (
                    person.map((p )=>(
                        <div key={p.name.first + p.name.last}> 
                        <img src={p.picture.large} alt=""/>
                        <p>{p.name.first}</p>
                        <p>{p.name.last}</p>
                        <p>{p.gender}</p>
                        <p>{p.email}</p>
                        </div>
                    ))
                   
                ):(<p>No data,Click Fetch button </p>)}
      </div>
    );
  }
}

export default Fetcharray;
