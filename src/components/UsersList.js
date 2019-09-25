import React from 'react'
import UserItem from './UserItem'

const UserList = (props) => {
    return (
        <ul>
            {props.usersArray.map(user =>
                <div>
                    <UserItem key={user.id} user={user} handleUpdate={props.handleUpdate} />
                    <button> Create User </button>
                </div>
            )}
        </ul>
    )
}

export default UserList