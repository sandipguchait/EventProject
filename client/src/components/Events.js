import React from 'react';
import Post from '../containers/Post';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import { Button } from 'reactstrap';

class Events extends React.Component {

    componentDidMount() {
        this.props.fetchEvents()        
    }

    render() {
        console.log(this.props)
        const events = this.props.events;
        return (
            
            <div>
                <h1 className = 'post-heading'>
                    All events : 
                </h1>
                { this.props.isFetching ? <div className = "post-message"> Loading events... </div> : 
                    ( !events.length  ? <div className = "post-message"> Add a first event </div> : <Post/> )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isFetching : state.isFetching,
        events : state.events,
        eventToEdit : state.eventToEdit,
        eventToDelete : state.eventToDelete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents : () => dispatch(actions.fetchEvents())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Events);