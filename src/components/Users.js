import React from "react"

class Users extends React.Component{ 
    constructor(){
        super()
        this.state = {
            usersArray: [],
        }
    }
   render(){
       return (
           <div> 
               <h1> Users </h1>
           </div>
       )
   }
}

export default Users 