import React, { Component } from 'react';
import { Button } from 'reactstrap';

export const UserContext = React.createContext();

class GoogleAuth extends Component {

  state = {
    isSignedIn: null,
    currentUser: ""
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '267461606910-tb7g2t4p0vop6jtr5tcdg5l23129i8ru.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get(), currentUser: this.auth.currentUser.get().getId() });
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()});
  };

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null ) {
      return null
    } else if (this.state.isSignedIn === true ) {
      return (
        <Button onClick={()=> this.onSignOutClick()} color="danger" style={{ marginLeft: "5px"}}>
          <img src='https:icon.now.sh/google/ffffff' alt='Google Icon'  style={{ marginRight: "5px"}} />
          Sign Out
        </Button>
      )
    } else {
      return (
        <Button onClick={()=>this.onSignInClick()} color="primary" style={{ marginLeft: "5px"}} >
          <img src='https:icon.now.sh/google/ffffff' alt='Google Icon' style={{ marginRight: "5px"}} />
          Sign In with Google
        </Button>
      )
    }
  }

  render() {
    const { isSignedIn } = this.state;
    return (
      <UserContext.Provider value={{ isSignedIn }}>
        <div>
          {this.renderAuthButton()}
        </div>
      </UserContext.Provider>
    );
  } 
}

export default GoogleAuth;