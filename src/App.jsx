import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import './App.scss';
import Colors from './Colors';
import Counter from './Counter';

const menu = ['home', 'color', 'counter'];

const Navigation = ({ menus }) => (
  <div className="navigation">
    <ul>
      {menus.map((m) => (
        <Link className="link" key={m} to={`/${m}`}>
          <li>{m}</li>
        </Link>
      ))}
    </ul>

  </div>
);
const Home = () => <h1>Home</h1>;
const Color = () => (
  <div>
    <Colors color="skyblue" />
    <Colors color="Pink" />
    <Colors color="purple" />
  </div>
);


class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Navigation menus={menu} />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/color" component={Color} />
          <Route exact path="/counter" component={Counter} />

        </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
