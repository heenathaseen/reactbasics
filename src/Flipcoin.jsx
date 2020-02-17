import React from 'react';
import "./Flipcoin.scss";
import tail from './Images/tail.jpeg';
import head from './Images/head.jpeg';


import {
    BrowserRouter, Switch, Route, Link,
  } from 'react-router-dom';
//   class Results extends React.Component{

//       render(){
//           const{result} =this.props;
          
//       return(<p>{result}</p>);
//       }
//   }

class Flipcoin extends React.Component {
    state = {
       result:'',
    }
    flip = () => this.setState(({result}) => ({result :(Math.floor(Math.random()>0.5)===0 ?<img src={head} alt=""/> : <img src={tail} alt=""/>)}));
  render() {
      const {result} = this.state;
    return (
      <div className="flip">
         
       
        <h1>{result}</h1>
        {/* <Link to ='/page'> */}
            <button type="button"  onClick={this.flip}>Flip a coin</button>
            {/* </Link> */}
        {/* <Switch>
           <Route exact path="/page" component={Results} />
      </Switch> */}
        
      </div>
     
    );
  }
}
export default Flipcoin;
