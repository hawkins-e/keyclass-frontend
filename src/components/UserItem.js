import React from 'react'



function handleDelete(){
    console.log("deleted")
}

const UserItem = (props) => (
    <div>
        <h2> {props.user.username} </h2>
        <h3> {props.user.name} </h3>
        <h3> {props.user.age} </h3>
        <h3> {props.user.avg_speed} </h3>
        <h3> {props.user.accuracy} </h3>
        <button onClick={props.handleUpdate}>Update User</button> 
        <button onClick={handleDelete}>Delete User</button>
    </div>
)

export default UserItem