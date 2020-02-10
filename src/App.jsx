import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import './App.scss';
import Colors from './Colors';
import Counter from './Counter';
import Photo from './Photo';
// import Gallery from './Gallery';
import Multibutton from './Multibutton';
import Instagram from './Instagram';
import Gallerysec from './Gallerysec';
import Form from './Form';
import Fetch from './Fecth';
import Fetcharray from './Fetcharray';
import Githubfetch from './Githubfetch';
import Lifestate from './Lifestate';
import Todo from './Todo';
import Localstorage from './Localstorage';
import Redux from './Redux';
import Mobx from './Mobx';

const menu = ['home',
  'color',
  'counter',
  'photo',
  // 'gallery',
  'gallerysec',
  'multibutton',
  'instagram',
  'form',
  'fetch',
  'fetcharray',
  'githubfetch',
  'lifestate',
  'todo',
  'localStorage',
  'redux',
  'mobx'];

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
          {/* <Route exact path="/gallery" component={Gallery} /> */}
          <Route exact path="/gallerysec" component={Gallerysec} />
          <Route exact path="/multibutton" component={Multibutton} />
          <Route exact path="/instagram" component={Instagram} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/fetch" component={Fetch} />
          <Route exact path="/fetcharray" component={Fetcharray} />
          <Route exact path="/githubfetch" component={Githubfetch} />
          <Route exact path="/lifestate" component={Lifestate} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/localstorage" component={Localstorage} />
          <Route exact path="/redux" component={Redux} />
          <Route exact path="/mobx" component={Mobx} />


        </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
