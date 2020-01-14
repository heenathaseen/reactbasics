import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import './App.scss';
import Colors from './Colors';
import Counter from './Counter';
import Photo from './Photo';
import Gallery from './Gallery';
import Multibutton from './Multibutton';
import Instagram from './Instagram';

const menu = ['home',
  'color',
  'counter',
  'photo',
  'gallery',
  'multibutton',
  'instagram'];

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
          <Route exact path="/photo" component={Photo} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/multibutton" component={Multibutton} />
          <Route exact path="/instagram" component={Instagram} />
        </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
