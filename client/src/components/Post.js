import React from "react";
import View from './View';
import '../index.css';
import { Container, Row , CardDeck, Input, Button} from 'reactstrap'

export default class Post extends React.Component{

    state = {
        updatedEvents: [],
        searchTerm: ''
    };

    handleChange= (e, events) => {
        this.setState({
            searchTerm: e.target.value,
        })
        const result = events.filter(event => (
         event.desc.toLowerCase().includes(e.target.value.toLowerCase())
         ))
       this.setState({ updatedEvents: result })
     }


    render() {
        const events = this.props.events;
        const { searchTerm, updatedEvents } = this.state;
        return (
            <div>
                <Container style={{ marginBottom: "20px"}}>
                    <div>
                        <Input type="search" 
                        img='https://icon.now.sh/search'
                        value={searchTerm}
                        style={{ width: "40%", marginLeft: "30%"}}
                         placeholder="Search Events" 
                         onChange={(e)=>this.handleChange(e, events)} 
                        />
                    </div>
                </Container>
                {
                   updatedEvents.length > 0 ? (updatedEvents.map((event) => (
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
                   ) : ( events.map((event) => (
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
               ) 
                }
            </div>
        )
    }
}