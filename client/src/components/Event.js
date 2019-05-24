import React from 'react';
import '../index.css';
import { Button } from 'reactstrap';

class Event extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
        console.log(this.props.fetchEvents)
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const desc = this.getDesc.value;
        const imageUrl = this.getImage.value;
        const date = this.getDate.value;
        const time = this.getTime.value;
        const followers = this.getFollowers.value;

        const data = {
            _id : new Date(),
            desc,
            imageUrl,
            date,
            time,
            followers,
            editing :false
        }
        
        this.props.addNewEvent(data);
        
        this.getDesc.value = '';
        this.getImage.value = '';
        this.getDate.value = '';
        this.getTime.value = '';
        this.getFollowers.value = '0';
        //Link
        this.props.history.push('/eventlist')

    }

    render() {
        return (
            <React.Fragment>
                <h2 className='post-heading'>
                        Add Event
                </h2>
                <div className = 'post-container'>
                    <form className = 'form' onSubmit = { this.handleSubmit }>
                        <input required type = 'text' ref = { input => this.getDesc = input }
                            placeholder = 'Enter the event description' /> <br/>
                        <input required type = 'text' ref = { input => this.getImage = input }
                            placeholder = 'Image Link' /> <br/>
                        <input required type = 'date' ref = { input => this.getDate = input }
                            placeholder = 'Enter the event date' /> <br/>
                        <input required type = 'time' ref = { input => this.getTime = input }
                            placeholder = 'Enter the event time' /> <br/>
                        <input required type = 'number' ref = { input => this.getFollowers = input}
                            defaultValue="0" placeholder = 'Enter the number of followers' /> <br/>
                         <Button color="primary">Submit</Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }    
}

export default Event;