import React from "react"
import {Link} from "react-router-dom"
import {Header, Icon} from "semantic-ui-react"

const Navbar = props => {
  return (
    <div className={`ui sticky-top inverted ${props.color} menu`}>
      <Link to="/typingtest" className="item">
        <Header as="h2" size="medium"  icon>
          <Icon name="keyboard outline" />
          <div className="content">{props.title}</div>
          <div className="sub header">{"Type with Us!"}</div>
        </Header>
      </Link>
    </div>
  );
};
 
export default Navbar 