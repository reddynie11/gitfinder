import React from 'react';
import axios from 'axios';

import NavBar from './components/Navbar/Navbar';
import UserList from './components/users/UserList'

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
    const fetchUsers = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_GIT_CLIENT_ID}&client_secret=${process.env.REACT_GIT_CLIENT_SECRET}`);
    //console.log(fetchUsers)
    this.setState({ users: fetchUsers.data.items , loading : false })
  }

  clearUsers = ()=> this.setState({users:[]})

 render(){
  return (
    <div className="">
      <NavBar searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0 ? true : false}/>
      <div className='container'> 
         {this.state.users.length>0 
          ? <UserList loading={this.state.loading} users={this.state.users}  /> 
          : <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop: '15%'}}>
              <h3>Search for Github Profile's</h3>
              <i className="fab fa-github-square fa-10x"></i> 
            </div>
        }
      </div>
    </div>
  );
 }
}

export default App;
