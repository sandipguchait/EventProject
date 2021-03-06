import React from 'react';
import EditPost from './EditPost';
import { withRouter, Link  }  from 'react-router-dom'
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
        this.setState({ showForm : true }, () => {
            this.props.history.push('/update')
        })

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
                    <Link to={`/update/${this.props.event.id}`}><Button color="primary" style={{ borderRadius: "15px"}}>EDIT</Button></Link>{' '}
                    <Button color="danger" onClick = {() => this.props.delete(this.props.event.id) } style={{ borderRadius: "15px"}}>DELETE</Button>{' '}
                    <div>
                     { this.state.showForm? <UpdateEvent renderForm={this.renderForm()} /> : "" }
                    </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default withRouter(View);