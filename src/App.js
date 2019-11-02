import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import UserList from './components/users/UserList';
import HomeDisplay from './components/HomeDisplay';

class App extends React.Component {
  state={
    users:[],
    loading: false
  }

  // async componentDidMount(){
  //   this.setState({ loading: true });
  //   const fetchUsers = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_GIT_CLIENT_ID}&client_secret=${process.env.REACT_GIT_CLIENT_SECRET}`);
  //   this.setState({ users: fetchUsers.data , loading : false })
  // }

  searchUsers = async (text)=>{
    this.setState({ loading: true });
    const fetchUsers = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.GIT_CLIENT_ID}&client_secret=${process.env.GIT_CLIENT_SECRET}`);
    //console.log(fetchUsers)
    this.setState({ users: fetchUsers.data.items , loading : false })
  }

  clearUsers = ()=> this.setState({users:[]})

 render(){
  return (
   <BrowserRouter>
       <div>
         <NavBar searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0 ? true : false}/>
         
            {this.state.users.length>0 
              ? <UserList loading={this.state.loading} users={this.state.users}  /> 
              : <HomeDisplay />
            }

        </div>
   </BrowserRouter>
  );
 }
}

export default App;
