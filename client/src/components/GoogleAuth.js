import React, { Component } from 'react';
import { Button } from 'reactstrap';


class GoogleAuth extends Component {

  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '267461606910-tb7g2t4p0vop6jtr5tcdg5l23129i8ru.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
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
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  } 
}

export default GoogleAuth;