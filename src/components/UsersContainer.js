import React from "react"
import UsersList from './UsersList'

const UsersURL = "http://localhost:3000/users"

class UsersContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            usersArray: [],
        }
        // this.handleNewUser = this.handleNewUser.bind(this)
        // this.addUser = this.addUser.bind(this)
    }

    //CREATE
    // addUser = (newUser) => {
    //     this.setState((prevState) => {
    //         return { usersArray: [...prevState.usersArray, newUser] }
    //     })
    // }

    // handleNewUser(event) {
    //     event.preventDefault()
    //     fetch(UsersURL, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accepts': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: "",
    //             name: "",
    //             age: "",

    //         })
    //     })
    //         .then(response => response.json())
    //         .then(user => { this.addUser(user) })
    //         .then(user => { this.updateUsersArray(user) })
    //     // 
    // }

    //READ 
    componentDidMount() {
        fetch(UsersURL)
            .then(response => response.json())
            .then(users => {
                this.setState({
                    usersArray: users
                })
            })

    }

    //UPDATE 
     handleUpdate = () => {
        // console.log("updated!")
        this.updateUsersArray()
    }

    updateUsersArray = (updatedUser) => {
        console.log(updatedUser)
        this.setState({
            //change this to prevState 
            usersArray: this.state.usersArray.map(user => {
                if (updatedUser.id === user.id) {
                    return updatedUser
                } else {
                    return user
                }
            })
        })
    }

    render() {
        return (
            <div>
                <UsersList
                    usersArray={this.state.usersArray}
                    handleUpdate={this.handleUpdate}
                    // addUser={this.addUser}
                    // handleNewUser={this.handleNewUser}
                />
            </div>
        )
    }
}

export default UsersContainer 