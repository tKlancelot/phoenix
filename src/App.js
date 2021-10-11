// import { Switch, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import './style/style.scss';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import View from './components/View';
import Projets from './pages/Projets';
import OneProject from './components/OneProject'
import CreateItem from './components/CreateItem';
import Blog from './pages/Blog';

// mdp strapi
// jG8ba!4ASydAMWv

const App = () => {
    return (
      <Router>
        <React.StrictMode>
            <Switch>
              {/* <Route path="/page/:number" component={Blog}/> */}
              <Route path="/view/:id" component={View}/>
              <Route path="/projets/:id" component={OneProject}/>
              <Route exact path="/"><Home/></Route>
              <Route path="/projets" component={Projets}/>
              <Route path="/createitem" component={CreateItem}/>
              <Route path="/blog" component={Blog}/>
              <Route><ErrorPage/></Route>
            </Switch>
        </React.StrictMode>
      </Router>
    );
};

export default App;