// import React from "react"


// class UserForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "",
//             username: "",
//             age: "",
//         }
//     }
    
//     handleChange = (event) => {
//         const {name, value} = event.target
//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit(event) {
//     event.preventDefault()
//     fetch(`http://localhost:3000/users/${this.state.id}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accepts': 'application/json'
//       },
//       body: JSON.stringify({
//         name: this.state.name,
//         username: this.state.username,
//         id: this.state.id,
//       })
//     })
//       .then(response => response.json())
//       .then(user => {this.props.updateUsersArray(user)})
//       .then(updatedUser => console.log(updatedUser))
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={this.state.name} 
//                     name="name" 
//                     placeholder="Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.username} 
//                     name="username" 
//                     placeholder="Username" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.age} 
//                     name="age" 
//                     placeholder="age" 
//                     onChange={this.handleChange} 
//                 />
//                 <input className="button" type="submit" value="Save" />
//                 <h1>{this.state.name} {this.state.username} {this.state.age}</h1>

//             </form>
//         )
//     }
// }

// export default UserEditor
