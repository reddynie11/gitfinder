import React from 'react';
import { Card, Button } from 'react-bootstrap';

class UserItem extends React.Component{
    
    render(){
        return(
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={this.props.user.avatar_url} style={{ borderRadius : '50%', width:'50%', margin:"10px auto"}} />
            <Card.Body className="text-center" >
              <Card.Title>{this.props.user.login.toUpperCase()}</Card.Title>
              <a href={this.props.user.html_url} className='btn btn-dark btn-sm' target='_blank'>Github</a>
            </Card.Body>
          </Card>
        )
    }
}
export default UserItem;