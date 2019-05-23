import React from 'react';
import Event from './containers/Event';
import Events from './containers/Events';
import NavBar from './components/NavBar';
import UpdateEvent from './components/Updateevent';
import Error from './components/Error';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render(){
    return (
      <div className = "App">
        <NavBar/>
        <Switch>
          <Route exact path="/addevent" component={Event} />
          <Route exact path="/" component={Home} />
          <Route path="/eventlist" component={Events} />
          <Route path="/update/:id" component={UpdateEvent} />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default App;