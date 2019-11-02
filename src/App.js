import React from 'react';


import NavBar from './components/Navbar/Navbar';
import UserList from './components/users/UserList'

class App extends React.Component {
  state={
    users:[],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true });
    const fetchUsers = axios.get('https://api.github.com/users');
    this.setState({ users: fetchUsers, loading : false })
  }

 render(){
  return (
    <div className="">
      <NavBar/>
      <div className='container'> <UserList users={this.state.users}/></div>
    </div>
  );
 }
}

export default App;
