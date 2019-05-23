import React from 'react';
import Event from './containers/Event';
import Events from './containers/Events';
import EditPost from './components/EditPost';
import UpdateEvent from './components/Updateevent';

import { BrowserRouter , Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render(){
    return (
      <div className = "App">
          {/* <Event />
          <Events /> */}
          <Route exact path="/addevent" component={Event} />
          <Route path="/eventlist" component={Events} />
          <Route path="/update/:id" component={UpdateEvent} />
      </div>
    )
  }
}

export default App;