import React from "react"
import {Link} from "react-router-dom"



const Navbar = props => {
  return (
    <div className={`ui top fixed inverted ${props.color} menu`}>
      <Link to="/typingtest" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <div className="right menu">
  
        <a className="item">
          <div className="ui primary button">Sign Up</div>
        </a>
      </div>
    </div>
  );
};
 

export default Navbar 