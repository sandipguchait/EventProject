import React from 'react';
import Event from './containers/Event';
import Events from './containers/Events';
import NavBar from './components/NavBar';
import UpdateEvent from './components/Updateevent';
import Error from './components/Error';
import Home from './components/Home';
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends React.Component {
  state = {
    isSignedIn: null,
    currentUser: ""
  }

  componentWillMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '267461606910-tb7g2t4p0vop6jtr5tcdg5l23129i8ru.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange()
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()});
  };


  render(){
    const { isSignedIn } = this.state;
    return (
      <div className = "App">
        <NavBar isSignedIn={isSignedIn}/>
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