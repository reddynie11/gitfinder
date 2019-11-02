import React from 'react';
import axios from 'axios';

import NavBar from './components/Navbar/Navbar';
import UserList from './components/users/UserList'

class App extends React.Component {
  state={
    users:[],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true });
    const fetchUsers = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_GIT_CLIENT_ID}&client_secret=${process.env.REACT_GIT_CLIENT_SECRET}`);
    this.setState({ users: fetchUsers.data , loading : false })
  }

 render(){
  return (
    <div className="">
      <NavBar/>
      <div className='container'> <UserList loading={this.state.loading} users={this.state.users}/></div>
    </div>
  );
 }
}

export default App;
