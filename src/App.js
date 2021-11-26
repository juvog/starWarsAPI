import "./App.css";
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Accueil from './Components/Accueil';
import Films from './Components/Films';
import Page404 from './Components/Page404';

  function App() {


    return (

      <div className="App"> 
      <React.Fragment>
        <BrowserRouter>

          <header>
            <Menu>
              <Menu.Item to="/" as={NavLink} activeStyle={{ fontWeight: "bold" }} exact={true}>Accueil</Menu.Item>
              <Menu.Item to="/Films" as={NavLink} activeStyle={{ fontWeight: "bold" }} exact={true}>Tous les Films</Menu.Item>
            </Menu>
          </header>

          
          <Switch>
            <Route path="/" component={Accueil} exact={true} />
             <Route path="/Films" component={Films}  />
            <Route path="*" component={Page404} /> 
          </Switch>


        </BrowserRouter>
      </React.Fragment>

      </div>

    );
  }

export default App;
