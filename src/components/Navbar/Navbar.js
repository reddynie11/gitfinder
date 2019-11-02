import React from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <i className='fab fa-github mx-2' />
                    <span>Github Profiles</span>
                </Navbar.Brand>
            </Navbar>
        )
    }
}
export default NavBar;