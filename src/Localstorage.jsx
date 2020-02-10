import React from 'react';
import "./Localstorage.scss";

class Localstorage extends React.Component {
    
    state = {
        todoText: "",
        data:''
      };
    
      handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
      handleSubmit = e => {
        e.preventDefault();
       localStorage.setItem("todo",this.state.todoText);
        this.setState({ todoText: "" });
      };    
      getData =() => {
          const cc = localStorage.getItem("todo");
          this.setState({data:cc});
      };

  render() {
    const { todoText, data } = this.state;
    return (
      <>
       <div className="ls">
           <div>
       <form onSubmit={this.handleSubmit}>
          <input
            name="todoText"
            type="text"
            value={todoText}
            onChange={this.handleChange}
            placeholder="Enter Todo"
          />
            <button type="submit">set data to local storage </button>
           </form>
          
       </div>
       
          
       <div>   
       
        <button type="button" onClick={this.getData}>get data to local storage </button>
        <p>{data && data}</p>
       
        <button type="button"onClick={()=>localStorage.removeItem('todo')}>delete data to local storage </button>
        <button type="button"onClick={()=> localStorage.clear()}>clear data to local storage </button></div>
          

        </div>
      </>
    );
  } 
}

export default Localstorage;
