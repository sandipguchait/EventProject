import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class EditPost extends React.Component{
    makeUpdates = (e) => {
        console.log(this.props.post)
        // const id = this.props.post.id; 
        e.preventDefault();
        console.log("clicked!")
        const newDesc = this.getDesc.value;
        const newImageUrl = this.getImageUrl.value
        const newDate = this.getDate.value;
        const newTime = this.getTime.value;
        const newFollowers = this.getFollowers.value;

        const data = {
            id : this.props.post._id, 
            desc : newDesc,
            imageUrl: newImageUrl,
            date : newDate,
            time : newTime,
            followers : newFollowers
        }
        axios.post('/api/editEvent', data)
            .then(() =>{
                this.props.history.push('/eventlist')
            })
        
    }

    render(){
        if(this.props.post) {
        return(
            <div key = { this.props.post.id } className='post'>
                <form className ="form">
                    <input required type = "text" ref = {(input) => this.getDesc = input}
                    defaultValue = { this.props.post.desc } placeholder = "Enter new description"/><br/>
                    <input required type = "text" ref = {(input) => this.getImageUrl = input}
                    defaultValue = { this.props.post.imageUrl } placeholder = "Image Link"/><br/>
                    <input required type = "date" ref = {(input) => this.getDate = input}
                    defaultValue = { this.props.post.date } placeholder = "Enter new date"/><br/>
                    <input required type = "time" ref = {(input) => this.getTime = input}
                    defaultValue = { this.props.post.time } placeholder = "Enter new time"/><br/>
                    <input required type = "number" ref = {(input) => this.getFollowers = input}
                    defaultValue = { this.props.post.followers } placeholder = "Enter new followers"/><br/> 
                    <button onClick = { this.makeUpdates } >Update</button>
                </form>
            </div>
        )
      }
    }
}

export default withRouter(EditPost)