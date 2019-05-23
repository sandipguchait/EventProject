import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions'
import EditPost from './EditPost';


class UpdateEvent extends Component {

  state = {
    event: []
  }

  componentDidMount = async () =>{
    const { id } = this.props.match.params;
    const response =  await axios.get(`/api/getEvent/${id}`);
    this.setState({ event: response.data.event })
    console.log('RESPPP', response.data.event)
  }

  render() {
        return (
          <React.Fragment>
            { this.state.event && <EditPost key = { this.state.event._id } post = { this.state.event }/>}
          </React.Fragment>
      );
    }
  }

export default (UpdateEvent);