import React from 'react';

import './App.css';

import NavBar from './components/Navbar/Navbar';
import UserList from './components/users/UserList'

class App extends React.Component {
 render(){
  return (
    <div className="">
      <NavBar/>
      <div className='container'> <UserList /></div>
    </div>
  );
 }
}

export default App;
