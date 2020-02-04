import React from 'react';


class Counter extends React.Component{
    render() {
        const {title,count,minus,plus} = this.props;
        return (
          <div>
          <h5>{title}</h5>
          <button type="button" onClick={plus}>+</button>
          <p>{count}</p>
          <button type="button" onClick={minus}>-</button>

          </div>
        );
}}
class Lifestate extends React.Component {
    state = {
        count:0
    }
    increment = () => this.setState(({count})=>({count:count+1}));
    decrement= () => this.setState(({count})=>({count:count-1}));
  render() {
    const {count} = this.state;
    return (<>
      <Counter 
      title="first"
      plus={this.increment}
      count={count}
      minus={this.decrement}/>
      <Counter 
      title="second"
      plus={this.increment}
      count={count}
      minus={this.decrement}/>
      </>
    );
  }
}
export default Lifestate;
