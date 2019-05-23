import React from "react";
import View from './View';
import '../index.css';
import { Container, Row , CardDeck} from 'reactstrap'

export default class Post extends React.Component{
    render() {
        const events = this.props.events;
        console.log('FROM POST',this.props);

        return (
            <div>
                {
                    events.map((event) => (
                        <Container className="flex-container">
                            
                        <View 
                            key = { event.id } 
                            event = { event }
                            delete = { this.props.deleteEvent }
                            edit = { this.props.editEvent }
                            editing = { this.props.editing}  
                            showForm = { this.props.showForm }
                            edit = { this.props.editEvent } 
                        />
                        
                        </Container>
                        )
                    )
                }
            </div>
        )
    }
}