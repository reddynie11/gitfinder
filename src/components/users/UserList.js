import React from 'react';

import UserItem from './UserItem';

class UserList extends React.Component{

    render(){
        if(this.props.loading){
            return <h1>Loading...</h1>
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