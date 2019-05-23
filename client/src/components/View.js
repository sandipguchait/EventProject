import React from 'react';
import EditPost from './EditPost';
import { withRouter }  from 'react-router-dom'
import '../index.css'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container , Col, Row, CardHeader} from 'reactstrap';
import UpdateEvent from './Updateevent';


class View extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            showForm : false,
        }
    }
    editEvent = () => {
        this.setState({ showForm : true })
        
    }

    renderForm = () => (
        <EditPost key = { this.props.event.id } post = { this.props.event } edit = { this.props.edit } />
    )

    render() {
        return (

            <Col sm="8" style={{ margin: "15px"}}>
                <Card>
                <CardBody>
                    <CardTitle><h1>{ this.props.event.desc }</h1></CardTitle>
                    <CardImg  src={this.props.event.imageUrl} alt="Card image cap"  style={{ marginBottom: '10px'}}/>
                    <CardText style={{ fontWeight: 'bolder'}}> 
                        Date : { this.props.event.date }<br/>
                        Time : { this.props.event.time }<br/>
                        Followers : { this.props.event.followers}<br/>
                    </CardText>
                    <Button color="primary" onClick = { this.editEvent }>EDIT</Button>{' '}
                    <Button color="danger" onClick = {() => this.props.delete(this.props.event.id) }>DELETE</Button>{' '}
                    <div>
                     { this.state.showForm? <UpdateEvent key={this.props.event.id} post={this.props.event} edit={this.props.edit} /> : "" }
                    </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default withRouter(View);