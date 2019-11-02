import React from 'react';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';

class NavBar extends React.Component{
    state={
        search : ''
    }

    handleChange= (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.search);
        this.setState({search:''})
    }
    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <i className='fab fa-github mx-2' />
                    <span>Github Profiles</span>
                </Navbar.Brand>
                <Form inline className="ml-auto" onSubmit={this.handleSubmit}>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" name="search" value={this.state.search} onChange={this.handleChange} />
                     <Button variant="outline-info" type="submit" >Search</Button>
                 </Form>
                 {this.props.showClear && <Button variant="outline-warning" type="submit" className="ml-2" onClick={this.props.clearUsers}>Clear</Button>}
            </Navbar>
        )
    }
}
export default NavBar;