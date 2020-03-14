import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,useParams
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
import Flipcoin from './Flipcoin';
import Hooksbasic from './Hooksbasics';
import Hooksfetch from './Hooksfetch';
import CrudWoHooks from './CrudwithoutHooks';
import CrudwithHooks from './CrudwithHooks';
import LifeCycle from './LifeCycle';
import Proptypes  from './PropTypes';
import CompoWrap from './CompoWrap';
import CheckBox from './CheckBox';


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
  'mobx',
  'flipcoin',
  'hooksbasics',
  'hooksfetch',
  'crudwithouthooks',
  'crudwithhooks',
  'lifecycle',
  'proptypes',
'componentswrap',
'checkbox'];

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
const ArticlePost = () => {
  const { articlepost } = useParams();
  return (
    <>
      <Switch>
        <Route path=":articlepost" />
      </Switch>
      <h2>Article: {articlepost}</h2>
    </>
  );
};

const articlePostData = [
  { id: 4, title: "Article Four", url: "article-four" },
  { id: 5, title: "Article Five", url: "article-five" },
  { id: 6, title: "Article Six", url: "article-six" }
];

const BlogPost = () => (
  <>
    <h3>Blog Post</h3>
    <ul>
      {articlePostData.map(a => (
        <li key={a.id} style={{ float: "none" }}>
          <Link to={`/${a.url}`}>{a.title}</Link>
        </li>
      ))}
    </ul>
  </>
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
          <Route exact path="/flipcoin" component={Flipcoin} />
          <Route exact path="/flipcoin" component={Flipcoin} />
          <Route exact path="/hooksbasics" component={Hooksbasic} />
          <Route exact path="/hooksfetch" component={Hooksfetch} />
          <Route exact path="/crudwithouthooks" component={CrudWoHooks} />
          <Route exact path="/crudwithhooks" component={CrudwithHooks} />
          <Route exact path="/lifecycle" component={LifeCycle} />
          <Route exact path="/proptypes" component={Proptypes} />
          <Route exact path="/componentswrap" component={CompoWrap} />
          <Route exact path="/checkbox" component={CheckBox} />

          <Route path="/blogpost" component={BlogPost} />
          <Route path="/:articlepost" component={ArticlePost} />
       </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
