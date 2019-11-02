import React from 'react';

import UserItem from './UserItem';

class UserList extends React.Component{

    render(){
        if(this.props.loading){
            return <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop: '20%'}}><h1>Loading...</h1></div> 
        }else{
            return(
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'1fr 1fr 1fr 1fr',
                    gridGap: '20px',
                    margin: '20px'
                }}>
                    {this.props.users.map(item => (
                    <UserItem key={item.id} user={item} />
                ))}
                </div>
            )
        }


    }
}
export default UserList;